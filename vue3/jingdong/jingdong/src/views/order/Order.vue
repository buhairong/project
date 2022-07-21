<template>
  <div class="wrapper">
    <div class='top'>
      <div class="top__header">
        <div class="iconfont top__header__back">&#xe6f2;</div>
        确认订单
      </div>
      <div class="top__receiver" @click="handleAddressSelect">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">李先生</span>
          <span class="top__receiver__info__tel">18911021123</span>
        </div>
        <div class="iconfont top__receiver__enter">&#xe6f2;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">{{ shopName }}</div>
      <div class="product">
        <div
          v-for="product in shopCartList"
          :key="product._id"
          class="product__item"
        >
          <img :src="product.imgUrl" alt="">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ product.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;{{ product.price }}*{{ product.count }} </span>
              <span class="product__item__yen"> &yen;{{ (product.price * product.count).toFixed(2) }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="order" @click="handleConfirmOrder">
      <div class="order__price">实付金额 &yen;{{ price }}</div>
      <div class="order__btn">提交订单</div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '@/effects/commonCartEffect'

const useOrderEffect = () => {
  const handleConfirmOrder = () => {

  }

  return {
    handleConfirmOrder
  }
}

export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const shopId = route.params.id
    const {
      shopName,
      price,
      shopCartList
    } = useCommonCartEffect(shopId)

    const { handleConfirmOrder } = useOrderEffect()

    const handleAddressSelect = () => {
      router.push('/address-select')
    }

    return {
      shopName,
      price,
      shopCartList,
      handleConfirmOrder,
      handleAddressSelect
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixins.scss';

.wrapper {
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  &__header {
    position:relative;
    padding-top: .4rem;
    line-height: .24rem;
    color: #fff;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius: .04rem;
  }
}
.products {
  margin: .16rem .18rem .55rem;
  background: #fff;
  &__title {
    font-size: .16rem;
    color: #333;
    padding: .16rem;
  }
}
.product {
  padding: 0 .16rem;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    border-bottom: .01rem solid #f1f1f1;
    img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
      @include ellipsis;
    }
    &__price {
      line-height: .2rem;
      font-size: .14rem;
      color: #e93b3b;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
</style>
