<template>
  <div class='wrapper'>
    <div class="title">
      我的地址
      <router-link to="/address-edit" class="title__create">新建</router-link>
    </div>
    <div class="address">
      <div
        v-for="item in addressList"
        :key="item._id"
        class="address__item"
        @click="handlerEditAddress(item._id)"
      >
        <p class="address__item__basic">
          {{ item.name }}
          <span class="address__item__phone">{{ item.phone }}</span>
        </p>
        <p class="address__item__address">
          {{ item.city }}{{ item.department }} {{ item.houseNumber }}
        </p>
        <div class="iconfont">&#xe6f2;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '@/utils/request'

const useAddressEffect = () => {
  const router = useRouter()
  const addressList = ref([])
  const getAddressList = async () => {
    const result = await get('/api/user/address')
    if (result?.errno === 0 && result?.data?.length) {
      addressList.value = result.data
    }
  }

  const handlerEditAddress = (id) => {
    router.push(`/address-edit?addressId=${id}`)
  }

  getAddressList()

  return {
    addressList,
    handlerEditAddress
  }
}

export default {
  name: 'Address',
  setup () {
    const { addressList, handlerEditAddress } = useAddressEffect()
    return {
      addressList,
      handlerEditAddress
    }
  }
}

</script>
<style lang="scss" scoped>
.wrapper {
  background: #eee;
  .title {
    position: relative;
    line-height: .5rem;
    background: #fff;
    font-size: .16rem;
    color: #333;
    text-align: center;
    &__create {
      position: absolute;
      font-size: .14rem;
      right: .18rem;
    }
  }
}
.address {
  margin: .16rem;
  &__item {
    position: relative;
    margin-bottom: .16rem;
    background: #fff;
    border-radius: .04rem;
    padding: .16rem .63rem .16rem .16rem;
    font-size: .14rem;
    .iconfont {
      position: absolute;
      right: .16rem;
      top: 40%;
      font-size: .2rem;
      transform: rotate(180deg);
    }
  }
}
</style>
