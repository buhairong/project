<template>
  <div class='wrapper'>
    <div class="search">
      <span class="iconfont">&#xe62d;</span>
      <input type="text" class="search__area" @change="handleSearchChange">
      <div class="search__cancel" @click="handleCancel">取消</div>
    </div>
    <div class="area" v-if="history.length">
      <div class="area__title">
        搜索历史
        <span class="area__title__clear" @click="handleClearHistory">清除搜索历史</span>
      </div>
      <ul class="area__list">
        <li
          class="area__list__item"
          v-for="(item, index) in history"
          :key="index"
          @click="goSearchList(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="area">
      <div class="area__title">
        热门搜索
      </div>
      <ul class="area__list">
        <li
          class="area__list__item"
          v-for="(item, index) in hotList"
          :key="index"
          @click="goSearchList(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '@/utils/request'

const useSearchEffect = () => {
  const router = useRouter()
  const history = ref(JSON.parse(localStorage.history || '[]'))
  const handleSearchChange = (e) => {
    const searchValue = e.target.value
    if (!searchValue.trim()) {
      return
    }
    const hasValue = history.value.find(item => item === searchValue)
    if (!hasValue) {
      history.value.push(searchValue)
      localStorage.history = JSON.stringify(history.value)
    }
    router.push(`/search-list?keyword=${searchValue}`)
  }

  const handleClearHistory = () => {
    history.value = []
    localStorage.history = JSON.stringify(history.value)
  }

  return {
    history,
    handleSearchChange,
    handleClearHistory
  }
}

const useHotWordsEffect = () => {
  const hotList = ref([])
  const getHotList = async () => {
    const result = await get('/api/shop/search/hot-words')
    if (result?.errno === 0 && result?.data?.length) {
      hotList.value = result.data
    }
  }

  getHotList()

  return {
    hotList
  }
}

export default {
  name: 'Search',
  setup () {
    const router = useRouter()
    const { history, handleSearchChange, handleClearHistory } = useSearchEffect()
    const { hotList } = useHotWordsEffect()

    const handleCancel = () => {
      router.back()
    }

    const goSearchList = (keyword) => {
      router.push(`/search-list?keyword=${keyword}`)
    }

    return {
      hotList,
      history,
      handleSearchChange,
      handleClearHistory,
      handleCancel,
      goSearchList
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: .16rem;
  .search {
    position: relative;
    display: flex;
    height: .32rem;
    line-height: .32rem;
    color: #333;
    .iconfont {
      position: absolute;
      left: .16rem;
      color: #b7b7b7;
    }
    &__area {
      flex: 1;
      background: #f5f5f5;
      border-radius: .16rem;
      border: none;
      outline: none;
      padding: 0 .16rem 0 .44rem;
      font-size: .14rem;
    }
    &__cancel {
      padding-left: .12rem;
      font-size: .16rem;
    }
  }
  .area {
    padding-top: .24rem;
    &__title {
      height: .22rem;
      line-height: .22rem;
      font-size: .16rem;
      color: #333;
      font-weight: bold;
      &__clear {
        float: right;
        font-size: .14rem;
        font-weight: normal;
      }
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin-left: -.1rem;
      &__item {
        line-height: .32rem;
        background: #f5f5f5;
        font-size: .14rem;
        border-radius: .02rem;
        padding: 0 .1rem;
        margin-left: .1rem;
        margin-top: .12rem;
        color: #666;
      }
    }
  }
}
</style>
