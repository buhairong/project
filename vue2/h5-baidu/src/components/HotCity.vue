<template>
  <div class="hot-city-list" style="margin-top: 15px; margin-bottom: 5px">
    <div @click="selectCity(c)" v-for="(c, i) in city" :key="i">{{ c }}</div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  data() {
    return {}
  },
  props: ['display', 'city'],
  methods: {
    selectCity(c) {
      this.display = 1
      PubSub.publish('selectCity', c)
    }
  }
}
</script>

<style scoped>
.hot-city-list {
  padding-left: 25px;
  padding-right: 15px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  color: #696D7F;
}

.hot-city-list div {
  width: calc(25% - 12px);
  display: inline-block;
  border: 1px solid #F0F1F2;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>