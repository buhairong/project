<template>
  <div class='wrapper'>
    <div class="title">
      <div class="iconfont back" @click="handlerBackClick">&#xe6f2;</div>
      {{ addressId ? '编辑地址' : '新建地址' }}
      <div class="save" @click="handleSave">保存</div>
    </div>
    <div class="content">
      <div class="content__item">
        <span class="content__item__label">所在城市：</span>
        <input type="text" class="content__item__input" v-model.trim="city">
      </div>
      <div class="content__item">
        <span class="content__item__label">小区/大厦/学校：</span>
        <input type="text" class="content__item__input" v-model.trim="department">
      </div>
      <div class="content__item">
        <span class="content__item__label">楼号-门牌号：</span>
        <input type="text" class="content__item__input" v-model.trim="houseNumber">
      </div>
      <div class="content__item">
        <span class="content__item__label">收货人：</span>
        <input type="text" class="content__item__input" v-model.trim="name">
      </div>
      <div class="content__item">
        <span class="content__item__label">联系电话：</span>
        <input type="text" class="content__item__input" v-model.trim="phone">
      </div>
    </div>
  </div>
  <Toast v-if="toastData.showToast" toastMsg="所有字段必填"/>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get, post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast.vue'

const handlerBackClickEffect = () => {
  const router = useRouter()

  const handlerBackClick = () => {
    router.back()
  }

  return {
    handlerBackClick
  }
}

export default {
  name: 'AddressEdit',
  components: {
    Toast
  },
  setup () {
    const { handlerBackClick } = handlerBackClickEffect()
    const city = ref('')
    const department = ref('')
    const houseNumber = ref('')
    const name = ref('')
    const phone = ref('')
    const { toastData, showToast } = useToastEffect()
    const router = useRouter()
    const route = useRoute()
    const addressId = route?.query?.addressId

    onMounted(async () => {
      if (addressId) {
        const result = await get(`/api/user/address/${addressId}`)
        if (result?.errno === 0 && result?.data) {
          const data = result?.data
          city.value = data?.city
          department.value = data?.department
          houseNumber.value = data?.houseNumber
          name.value = data?.name
          phone.value = data?.phone
        }
      }
    })

    const handleSave = async () => {
      if (!city.value ||
          !department.value ||
          !houseNumber.value ||
          !name.value ||
          !phone.value
      ) {
        showToast()
      } else {
        const result = await post('/api/user/address', {
          city: city.value,
          department: department.value,
          houseNumber: houseNumber.value,
          name: name.value,
          phone: phone.value
        })
        if (result?.errno === 0) {
          router.back()
        }
      }
    }
    return {
      addressId,
      city,
      department,
      houseNumber,
      name,
      phone,
      toastData,
      handlerBackClick,
      handleSave
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
    .back {
      text-align: center;
      font-size: .2rem;
      color: #b6b6b6;
      position: absolute;
      left: .18rem;
    }
    .save {
      position: absolute;
      top: 0;
      right: .18rem;
    }
  }
  .content {
    background: #fff;
    padding: .16rem;
    margin-top: .12rem;
    &__item {
      height: .44rem;
      line-height: .44rem;
      overflow: hidden;
      border-bottom: .01rem solid #f1f1f1;
      font-size: .14rem;
      display: flex;
      &__label {
        color: #999;
      }
      &__input {
        border: none;
        outline: none;
        color: #333;
        flex: 1;
      }
    }
  }
}
</style>
