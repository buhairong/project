<template>
  <div class='shop'>
    <img :src="shop.imgUrl">
    <div
      class="shop__content"
      :class="{'shop__content__bordered': !hideBorder}"
    >
      <div class="title">{{ shop.name }}</div>
      <div class="tags">
        <span class="tag">
          月售{{ shop.sales }}
        </span>
        <span class="tag">
          起送¥{{ shop.expressLimit }}
        </span>
        <span class="tag">
          基础运费¥{{ shop.expressPrice }}
        </span>
      </div>
      <p class="highlight">
        {{ shop.slogan }}
      </p>
      <div class="shop__products" v-if="shop.products">
        <div
          v-for="(product, index) in shop.products"
          :key="index"
          class="shop__product"
        >
          <img :src="product.imgUrl" class="shop__product__img">
          <div class="shop__product__title">{{ product.name }}</div>
          <div class="shop__product__price">
            <span class="price__yen">&yen;</span>{{ product.price }}
            <span class="origin__yen">&yen;{{ product.oldPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shop: {
      type: Object,
      required: true
    },
    hideBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/style/viriables.scss';

.shop {
  display: flex;
  padding-top: .14rem;
  img {
    width: .56rem;
    height: .56rem;
    margin-right: .16rem;
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    &__bordered {
      border-bottom: .01rem solid $content-bgColor;
    }
    .title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    .tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
      .tag {
        padding-right: .16rem;
      }
    }
    .highlight {
      margin-top: .08rem;
      color: #e93b3b
    }
  }
  .origin__yen {
    text-decoration: line-through;
  }
}
</style>
