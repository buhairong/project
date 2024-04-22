<template>
  <div
    @click="toDrive"
    class="car"
    :style="{
      'background-position': offset + 'px',
      backgroundImage: 'url(' + require('../assets/images/car.png') + ')',
    }"
  ></div>
</template>

<script>
export default {
  name: "Car",
  mounted() {
    setInterval(() => {
      if (this.offset == -3600) {
        this.offset = 0;
      } else {
        this.offset -= 100;
      }
    }, 75);
  },
  methods: {
    toDrive() {
      window.location.href = "https://apollo..com/driver?unique_key=21-FSxMjVH";
    },
  },
  data() {
    return {
      offset: 0,
    };
  },
};
</script>

<style scoped>
.car {
  width: 100px;
  height: 55px;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  background-size: 3600px 55px;
}
</style>
