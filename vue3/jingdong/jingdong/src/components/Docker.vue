<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :key="index"
      class="docker__item"
      :class="{'docker__item--active': index === activeIndex}"
      @click="activeIndex = index"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Docker',
  setup () {
    const activeIndex = ref(0)
    const dockerList = [
      {
        icon: '&#xe6f3;',
        text: '首页',
        to: { name: 'Home' }
      },
      {
        icon: '&#xe7e5;',
        text: '购物车',
        to: { name: 'Cart' }
      },
      {
        icon: '&#xe61e;',
        text: '订单',
        to: { name: 'OrderList' }
      },
      {
        icon: '&#xe660;',
        text: '我的',
        to: { name: 'Address' }
      }
    ]

    return {
      activeIndex,
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';

.docker {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid $content-bgColor;
  display: flex;
  padding: 0 .18rem;
  box-sizing: border-box;
  &__item {
    flex: 1;
    text-align: center;
    a {
      text-decoration: none;
      color: $content-fontcolor;
    }
    .iconfont {
      font-size: .18rem;
      margin: .07rem 0 .02rem 0;
    }
    .docker__title {
      font-size: .2rem;
      transform: scale(.5, .5);
      transform-origin: center top;
      color: $content-fontcolor;
    }
    &--active {
      a {
        text-decoration: none;
        color: #1FA4FC;
        .docker__title {
          color: #1FA4FC;
        }
      }
    }
  }
}
</style>
