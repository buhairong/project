<template>
  <div class='wrap'>
    <div class="title">我的全部购物车</div>
    <div class="cart">
      <div
        class="cart__item"
        v-for="(item, key) in list"
        :key="key"
      >
        <div class="cart__item__title">{{ item.shopName }}</div>
        <div class="product">
          <div
            v-for="(product, productKey) in item.productList"
            :key="productKey"
            class="product__item"
          >
            <img :src="product.imgUrl" alt="" class="product__img">
            <div class="product__content">
              <div class="product__content__title">{{ product.name }}</div>
              <div class="product__content__price">{{ product.price }} x {{ product.count }}</div>
              <div class="product__content__total">{{ (product.price * product.count).toFixed(2) }}</div>
            </div>
          </div>
        </div>
        <div class="cart__total">
          共计 {{ item.total }} 件
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  setup () {
    const list = JSON.parse(localStorage.cartList || '{}')
    for (const key in list) {
      const productList = list[key]?.productList
      let total = 0
      for (const productKey in productList) {
        total += productList[productKey]?.count
      }
      list[key].total = total
    }

    return {
      list
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
.cart {
  padding: .16rem;
  &__item {
    padding: .16rem;
    background-color: #fff;
    border-radius: .06rem;
    margin-bottom: .2rem;
    .product {
      &__item {
        display: flex;
        padding-top: .2rem;
      }
      &__img {
        width: .46rem;
        height: .46rem;
        margin-right: .1rem;
      }
    }
  }
  &__total {
    height: .28rem;
    line-height: .28rem;
    margin: .16rem;
    color: #999;
    text-align: center;
    font-size: .14rem;
    background: #f5f5f5;
  }
}
</style>
