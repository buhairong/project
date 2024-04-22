<template>
  <div id="app">
    <router-view style="height:100%;"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    const fullPath = this.$route.fullPath
    if (fullPath.indexOf('/ns/') === -1) {
      if (this.isMobile()) {
        this.$router.replace({ name: "mp" });
      } else {
        this.$router.replace({ name: "pc" });
      }
    }

    // 临时禁用此方法，避免被 nio app 注入抓取 img 的代码
    // 暂时无法保证是否会引发其他不良后果
    document.elementFromPoint = "";
  },
  methods: {
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      console.log(navigator.userAgent);
      return flag;
    },
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.match {
  color: #00bebe;
}

/* 处理腾讯地图内 img 标签被 nio app 捕获预览的问题 */
#container img,
#container-pc img {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>