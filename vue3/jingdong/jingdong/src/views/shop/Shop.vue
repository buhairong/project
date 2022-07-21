<template>
  <div class="wrapper">
    <div class="search">
      <div class="iconfont search__back" @click="handlerBackClick">&#xe6f2;</div>
      <div class="search__content">
        <span class="search_icon iconfont">&#xe62d;</span>
        <input type="text" placeholder="请输入商品名称">
      </div>
    </div>
    <ShopInfo
      :shop="item"
      :hideBorder="true"
    />
    <Content :shopName="item.name"/>
    <Cart />
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { get } from '@/utils/request.js'
import ShopInfo from '@/components/ShopInfo.vue'
import Content from './components/Content.vue'
import Cart from './components/Cart.vue'

const handlerBackClickEffect = () => {
  const router = useRouter()

  const handlerBackClick = () => {
    router.back()
  }

  return {
    handlerBackClick
  }
}

const getShopInfoEffect = () => {
  const data = reactive({
    item: {}
  })
  const route = useRoute()
  console.log(route.params)
  const id = route.params.id

  const getShopInfo = async () => {
    const result = await get(`/api/shop/${id}`)
    data.item = result.data
  }

  getShopInfo()

  return toRefs(data)
}

export default {
  name: 'Shop',
  components: {
    ShopInfo,
    Content,
    Cart
  },
  setup () {
    const { item } = getShopInfoEffect()

    const { handlerBackClick } = handlerBackClickEffect()

    return {
      item,
      handlerBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: .18rem .18rem 0;
  .search {
    margin-bottom: .04rem;
    display: flex;
    align-items: center;
    height: .32rem;
    &__back {
      width: .32rem;
      height: .32rem;
      line-height: .32rem;
      text-align: center;
      font-size: .2rem;
      color: #b6b6b6;
    }
    &__content {
      display: flex;
      flex: 1;
      height: .32rem;
      line-height: .32rem;
      background: #f5f5f5;
      border-radius: .16rem;
      .search_icon {
        width: .44rem;
        text-align: center;
        color: #b6b6b6;
      }
      input {
        flex: 1;
        border: none;
        outline: none;
        background: none;
        padding-right: .2rem;
        color: #333;
        font-size: .14rem;
        &::placeholder {
          color: #333;
        }
      }
    }
  }
}
</style>
