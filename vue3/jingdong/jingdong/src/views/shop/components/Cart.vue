<template>
  <div class="mask" v-show="showCart" @click="handleShowCartChange"></div>
  <div class='cart'>
    <div class="product" v-show="showCart">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="setCartItemCheck(shopId, !isAllChecked)"
        >
          <span
            class="iconfont"
            v-html="isAllChecked ? '&#xe652;' : '&#xe6f7;'"
          >
          </span>
          全选
        </div>
        <div
          class="product__header__clear"
          @click="clearCart(shopId)"
        >
          清空购物车
        </div>
      </div>
      <template
        v-for="product in shopCartList"
        :key="product._id"
      >
        <div
          class="product__item"
          v-if="product.count"
        >
          <div
            class="iconfont product__item__check"
            v-html="product.check ? '&#xe652;' : '&#xe6f7;'"
            @click="changeCartItemCheck(product)"
          >
          </div>
          <img :src="product.imgUrl" alt="">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ product.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ product.price }}
              <span class="product__item__origin">&yen;{{ product.oldPrice }}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="changeCartInfo(shopId, product._id, product, -1)"
            >-</span>
              {{ product?.count || 0 }}
            <span
              class="product__number__plus"
              @click="changeCartInfo(shopId, product._id, product, 1)"
            >+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon" @click="handleShowCartChange">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="tag">{{ count }}</div>
      </div>
      <div class="check__info">
        总计：<span class="price">&yen;{{ price }}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{path: `/order/${shopId}`}">去结算</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/commonCartEffect'

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const {
      showCart,
      count,
      price,
      shopCartList,
      changeCartInfo,
      changeCartItemCheck,
      clearCart,
      isAllChecked,
      setCartItemCheck,
      handleShowCartChange
    } = useCommonCartEffect(shopId)

    return {
      showCart,
      shopId,
      count,
      price,
      shopCartList,
      changeCartInfo,
      changeCartItemCheck,
      clearCart,
      isAllChecked,
      setCartItemCheck,
      handleShowCartChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixins.scss';

.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 10;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: #fff;
  .product {
    overflow-y: scroll;
    background: #fff;
    &__header {
      height: .52rem;
      border-bottom: .01rem solid #f1f1f1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .18rem;
      font-size: .14rem;
      color: #333;
      .iconfont {
        color: #0091ff;
        font-size: .2rem;
      }
    }
    &__item {
      position: relative;
      display: flex;
      align-items: center;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid #f1f1f1;
      .iconfont {
        color: #0091ff;
        font-size: .2rem;
      }
      img {
        width: .46rem;
        height: .46rem;
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
        margin-top: .06rem;
      }
      &__yen {
        font-size: .12rem;
      }
      &__origin {
        line-height: .2rem;
        font-size: .12rem;
        text-decoration: line-through;
        color: #999;
        padding-right: .06rem;
      }
      .product__number {
        position: absolute;
        right: 0;
        bottom: .12rem;
        line-height: .2rem;
        &__minus, &__plus {
          display: inline-block;
          width: .2rem;
          height: .2rem;
          line-height: .16rem;
          text-align: center;
          border-radius: 50%;
          font-size: .2rem;
        }
        &__minus {
          border: .01rem solid #666;
          color: #666;
          margin-right: .05rem;
        }
        &__plus {
          background: #0091ff;
          color: #fff;
          margin-left: .05rem;
        }
      }
    }
  }
  .check {
    display: flex;
    height: .5rem;
    border-top: .01rem solid #f1f1f1;
    &__icon {
      width: .84rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img {
        width: .28rem;
      }
      .tag {
        position: absolute;
        top: 0;
        left: .46rem;
        min-width: .2rem;
        height: .2rem;
        padding: 0 .04rem;
        background-color: #e93b3b;
        border-radius: .1rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(.5);
        transform-origin: left center;
      }
    }
    &__info {
      flex: 1;
      display: flex;
      align-items: center;
      color: #333;
      .price {
        color: #e93b3b;
        font-size: .18rem;
      }
    }
    &__btn {
      width: .98rem;
      background-color: #4fb0f9;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .14rem;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
