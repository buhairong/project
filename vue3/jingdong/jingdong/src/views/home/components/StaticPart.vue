<template>
  <div class="position">
    <span class="iconfont">&#xe619;</span>
    <span class="addr">北京理工大学国防科技园2号楼10层</span>
    <span class="iconfont">&#xe60b;</span>
  </div>
  <router-link :to="{name: 'Search'}">
    <div class="search">
      <span class="iconfont">&#xe62d;</span>
      山姆会员商店优惠商品
    </div>
  </router-link>
  <div class="banner">
    <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
  </div>
  <div class="icons">
    <div
      v-for="(icon, index) in iconList"
      :key="index"
      class="icons__item"
    >
      <img :src="`http://www.dell-lee.com/imgs/vue3/${icon.imgUrl}.png`" alt="">
      <p>{{ icon.text }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      {
        imgUrl: '超市',
        text: '超市便利'
      },
      {
        imgUrl: '菜市场',
        text: '菜市场'
      },
      {
        imgUrl: '水果店',
        text: '水果店'
      },
      {
        imgUrl: '鲜花',
        text: '鲜花绿植'
      },
      {
        imgUrl: '医药健康',
        text: '医药健康'
      },
      {
        imgUrl: '家居',
        text: '家居时尚'
      },
      {
        imgUrl: '蛋糕',
        text: '烘焙蛋糕'
      },
      {
        imgUrl: '签到',
        text: '签到'
      },
      {
        imgUrl: '大牌免运',
        text: '大牌免运'
      },
      {
        imgUrl: '红包',
        text: '红包套餐'
      }
    ]

    return {
      iconList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';

.position {
  padding: .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconfont {
    font-size: .2rem;
  }
  .addr {
    flex: 1;
    padding: 0 .08rem;
    color: $content-fontcolor;
    @include ellipsis;
  }
}
.search {
  height: .32rem;
  line-height: .32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: .16rem;
  font-size: .14rem;
  .iconfont {
    padding: 0 .08rem 0 .16rem;
  }
}
.banner {
  margin-top: .16rem;
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  img {
    width: 100%;
  }
}
.icons {
  margin-top: .16rem;
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 20%;
    text-align: center;
    img {
      width: .4rem;
    }
    p {
      margin: .06rem 0 .16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background-color: $content-bgColor;
}
</style>
