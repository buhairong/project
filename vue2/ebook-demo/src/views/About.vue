<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>This is an about page1</h1>
    <div v-for="(item, index) in map" :key="index">
      <div  v-for="(data) in item" :key="data">
       data: {{data}},
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      map: new Map()
    }
  },
  mounted() {
    this.map.set("a", "a1")
    this.map.set("b", "b1")
    this.map.set("c", "c1")
    console.log(this.map)
  }
}
</script>