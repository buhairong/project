<template>
  <div class='content'>
    <div class="category">
      <div
        v-for="category in CATEGORYS"
        :key="category.id"
        class="category__item"
        :class="{ 'category__item--active': category.id === activeCategoryId}"
        @click="changeCategory(category.id)"
      >
        {{ category.text }}
      </div>
    </div>
    <div class="product">
      <div
        v-for="product in productList"
        :key="product._id"
        class="product__item"
      >
        <img :src="product.imgUrl" alt="">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ product.name }}</h4>
          <p class="product__item__sales">月售{{ product.sales}}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ product.price }}
            <span class="product__item__origin">&yen;{{ product.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus"
            @click="changeCart(shopId, product._id, product, -1)"
          >-</span>
            {{ cartList?.[shopId]?.productList?.[product._id]?.count || 0 }}
          <span
            class="product__number__plus"
            @click="changeCart(shopId, product._id, product, 1)"
          >+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '@/utils/request'
import { useCommonCartEffect } from '@/effects/commonCartEffect'

const CATEGORYS = [
  { id: 'all', text: '全部商品' },
  { id: 'seckil', text: '秒杀' },
  { id: 'fruit', text: '新鲜水果' }
]

const useCategoryEffect = () => {
  const activeCategoryId = ref(CATEGORYS[0].id)

  const changeCategory = categoryId => {
    activeCategoryId.value = categoryId
  }

  return {
    activeCategoryId,
    changeCategory
  }
}

const useProductEffect = (currentTab, shopId) => {
  const data = reactive({
    productList: []
  })

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.data && result?.data?.length) {
      data.productList = result.data
    }
  }

  watchEffect(() => {
    getContentData()
  })

  const { productList } = toRefs(data)

  return {
    productList
  }
}

export default {
  name: 'ShopContent',
  props: ['shopName'],
  setup (props) {
    const route = useRoute()
    const shopId = route.params.id
    const { activeCategoryId, changeCategory } = useCategoryEffect()
    const { productList } = useProductEffect(activeCategoryId, shopId)
    const { productList: cartList, changeCartInfo } = useCommonCartEffect(shopId)

    const changeCart = (shopId, productId, product, num) => {
      changeCartInfo(shopId, productId, product, num, props.shopName)
    }

    return {
      CATEGORYS,
      shopId,
      activeCategoryId,
      changeCategory,
      productList,
      cartList,
      changeCart
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixins.scss';

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
  .category {
    width: .76rem;
    background: #f5f5f5;
    overflow-y: scroll;
    &__item {
      line-height: .4rem;
      text-align: center;
      font-size: .14rem;
      color: #333;
      &--active {
        background: #fff;
      }
    }
  }
  .product {
    flex: 1;
    overflow-y: scroll;
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
      &__sales {
        padding: .06rem 0;
        line-height: .16rem;
        font-size: .12rem;
        color: #333;
      }
      &__price {
        line-height: .2rem;
        font-size: .14rem;
        color: #e93b3b;
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
}
</style>
