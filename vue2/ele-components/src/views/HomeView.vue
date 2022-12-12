<template>
  <div>
    <el-button type="primary" @click="goTo('/backTopOne')">页面一</el-button>
    <el-button type="primary" @click="goTo('/backTopTwo')">页面二</el-button>

    <c-input 
        :inputValue.sync="value"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  }
}
</script>
