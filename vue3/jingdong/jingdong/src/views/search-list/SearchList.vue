<template>
  <div class='wrapper'>
    <div class="search">
      <div class="iconfont search__back" @click="handlerBackClick">&#xe6f2;</div>
      <div class="search__content">
        <span class="search_icon iconfont">&#xe62d;</span>
        <input type="text"
          placeholder="请输入商品名称"
          v-model="keyword"
          @change="handleInputChange"
        >
      </div>
    </div>
    <router-link
      v-for="item in list"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo
        :shop="item"
      />
    </router-link>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { get } from '@/utils/request'
import ShopInfo from '@/components/ShopInfo.vue'

const handlerBackClickEffect = () => {
  const router = useRouter()

  const handlerBackClick = () => {
    router.back()
  }

  return {
    handlerBackClick
  }
}

const useSearchEffect = () => {
  const list = ref([])
  const getList = async (keyword) => {
    const result = await get('/api/shop/search', {
      keyword
    })
    if (result?.errno === 0 && result?.data?.length) {
      list.value = result.data
    }
  }

  return {
    list,
    getList
  }
}

export default {
  name: 'SearchList',
  components: {
    ShopInfo
  },
  setup () {
    const route = useRoute()
    const keyword = ref(route.query.keyword || '')
    const { handlerBackClick } = handlerBackClickEffect()
    const { list, getList } = useSearchEffect()
    getList(keyword.value)
    const handleInputChange = () => {
      getList(keyword.value)
    }

    return {
      keyword,
      list,
      handlerBackClick,
      handleInputChange
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
