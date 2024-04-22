<template>
  <div class="row">
    <img
      class="-invisible -internal"
      :src="'images/search/' + icon + '.png'"
      width="24"
    />
    <div class="name" v-html="name"></div>
    <div class="addr">{{ addr }}</div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: ["name", "addr", "icon"],
};
</script>

<style scoped>
.row {
  height: 72px;
  border-bottom: 1px solid #f0f1f2;
  margin-left: 24px;
  margin-right: 24px;
  position: relative;
}

.row img {
  position: absolute;
  left: 0;
  top: 25px;
}

.name {
  position: absolute;
  left: 35px;
  top: 16px;
  font-size: 16px;
  color: #000f16;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(100% - 35px);
}

.addr {
  position: absolute;
  left: 35px;
  bottom: 16px;
  font-size: 12px;
  color: #9b9da9;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(100% - 35px);
}
</style>
