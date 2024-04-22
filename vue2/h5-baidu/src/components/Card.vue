<template>
  <div class="card">
    <div class="border"></div>
    <div class="icon">
      <img :src="'images/icon-res/' + icon + '.png'" class="nio-invisible nio-internal">{{ title }}
    </div>
    <div v-if="data" class="data">
      <div v-for="(d, i) in data" :key="i">
        <span class="num">{{ d.num }}</span><span>{{ d.unit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'data', 'icon']
}
</script>

<style scoped>
.card {
  flex: 1;
  font-size: 12px;
  height: 45px;
  position: relative;
  padding-left: 10px;
}

.border {
  border-left: 1px solid #00BEBE;
  height: 40px;
  position: absolute;
  left: 0;
  top: 2px;
}

.icon {
}

.icon img {
  height: 17px;
  margin-right: 5px;
}

.data {
  margin-top: 5px;
  height: 18px;
  display: flex;
}

.data > div {
  margin-right: 10px;
}

.card .num {
  font-size: 16px;
  font-weight: 700;
}

.card img {
  vertical-align: middle;
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
</style>