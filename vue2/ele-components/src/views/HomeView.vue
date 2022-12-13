<template>
  <div>
    <el-button type="primary" @click="goTo('/backTopOne')">页面一</el-button>
    <el-button type="primary" @click="goTo('/backTopTwo')">页面二</el-button>
    <el-button type="primary" @click="goTo('/login')">登录</el-button>
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
