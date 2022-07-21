<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo
        :shop="item"
      />
    </router-link>
  </div>
  <Toast v-if="toastData.showToast" :toastMsg="toastData.toastMessage" />
</template>

<script>
import { ref } from 'vue'
import { get } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast.vue'
import ShopInfo from '@/components/ShopInfo.vue'

const getNearbyListEffect = (showToast) => {
  const nearbyList = ref([])

  const getNearbyList = async () => {
    try {
      const result = await get('/api/shop/hot-list')

      console.log(result)

      if (result?.errno === 0 && result?.data?.length) {
        nearbyList.value = result.data
      } else {
        console.log('请求失败')
        showToast('请求失败1')
      }
    } catch (e) {
      console.log('请求失败', e)
      showToast('请求失败2')
    }
  }

  getNearbyList()

  return {
    nearbyList,
    getNearbyList
  }
}

export default {
  name: 'Nearby',
  components: {
    Toast,
    ShopInfo
  },
  setup () {
    const { toastData, showToast } = useToastEffect()
    const { nearbyList, getNearbyList } = getNearbyListEffect(showToast)

    return {
      nearbyList,
      toastData,
      showToast,
      getNearbyList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';

.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    color: $content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}
</style>
