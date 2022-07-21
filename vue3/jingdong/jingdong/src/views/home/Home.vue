<template>
  <div>
    <StaticPartVue />
    <Nearby />
  </div>
</template>

<script>
import StaticPartVue from './components/StaticPart.vue'
import Nearby from './components/Nearby.vue'

export default {
  name: 'Home',
  components: {
    StaticPartVue,
    Nearby
  }
}
</script>

<style lang="scss" scoped></style>
