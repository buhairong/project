<template>
  <div class="card">
    <div class="border"></div>
    <div class="icon">
      <img :src="'images/icon-res/' + icon + '.png'" class="nio-invisible nio-internal"><span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HalfCard",
  props: ['icon', 'title']
}
</script>

<style scoped>
.card {
  flex: 1;
  font-size: 12px;
  height: 17px;
  position: relative;
  padding-left: 10px;
}

.border {
  border-left: 1px solid #00BEBE;
  height: 17px;
  position: absolute;
  left: 0;
}

.icon {
  position: relative;
}

.icon img {
  position: absolute;
  top: 1px;
  left: 0;
  height: 16px;
}

.icon span {
  display: inline-block;
  margin-left: 21px;
}
</style>