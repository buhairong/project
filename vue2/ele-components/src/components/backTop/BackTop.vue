<template>
  <div class="page-content-scroll">
    <el-backtop target=".page-content-scroll"></el-backtop>
    <slot></slot>
  </div>
</template>

<script>
export default {
    components: {
        
    }
    
}
</script>

<style lang="scss" scoped>
.page-content-scroll {
    // 必须撑满整个屏幕
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
}
</style>