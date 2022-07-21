<template>
  <router-view class="wrapper"></router-view>
  <Docker />
</template>

<script>
import Docker from '@/components/Docker.vue'

export default {
  name: 'App',
  components: {
    Docker
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
}
</style>
