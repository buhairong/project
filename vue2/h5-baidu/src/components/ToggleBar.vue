<template>
  <div class="toggle-bar">{{ showAll ? '收起' : '显示全部' }}
    <i :class="showAll?'el-icon-arrow-up':'el-icon-arrow-down'" style="margin-left: 3px"></i></div>
</template>

<script>
export default {
  name: "ToggleBar",
  props: ['showAll']
}
</script>

<style scoped>
.toggle-bar {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #9B9DA9;
  text-align: center;
}
</style>