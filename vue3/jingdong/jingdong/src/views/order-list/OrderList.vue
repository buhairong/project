<template>
  <div class='wrap'>
    <div class="title">我的订单</div>
    <div class="orders">
      <div
        class="order"
        v-for="(item, index) in orderList"
        :key="index"
      >
        <div class="order__title">
          {{ item.shopName }}
          <span class="status">{{ item.isCanceled ? '已取消' : '' }}</span>
        </div>
        <div class="order__content">
          <div
            class="order__content__imgs"
            v-for="(products, index1) in item.products"
            :key="index1"
          >
            <img :src="products.product.img" alt="">
          </div>
          <div class="order__info">
            <div class="order__info__price">&yen;36.88</div>
            <div class="order__info__count">共2件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '@/utils/request'

const useOrderEffect = () => {
  const data = reactive({
    orderList: []
  })
  const getOrderList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      data.orderList = result.data
    }
  }
  getOrderList()
  return toRefs(data)
}

export default {
  name: 'OrderList',
  setup () {
    const { orderList } = useOrderEffect()

    return {
      orderList
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background: #eee;
}
.title {
  line-height: .5rem;
  background: #fff;
  font-size: .16rem;
  color: #333;
  text-align: center;
}
.orders {
  .order {
    margin: .16rem;
    padding: .16rem;
    background: #fff;
    &__content {
      img {
        width: .48rem;
      }
    }
  }
}
</style>
