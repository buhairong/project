<template>
  <div class="btn-group">
    <!--
    <div class="play-btn img-btn" :style="controlStyle" @click="playBtnHandler">
      <img src="https://cdn-app.nio.com/pe/ns/play.svg">
    </div>
    -->
    <div class="bottom-btn-group">
      <div class="resource-btn img-btn" :style="controlStyle" @click="resourceBtnHandler" v-if="tab==='resource'">
        <img src="https://cdn-app.nio.com/pe/ns/location.svg">
      </div>
      <!-- <div class="zoom-btn-group" :style="controlStyle">
        <div class="max-zoom-btn img-btn" @click="maxZoomHandler">
          <img src="https://cdn-app.nio.com/PE/2021/11/11/497ea113-852a-4a20-b68f-e14e60dd1f5b.svg">
        </div>
        <div class="min-zoom-btn img-btn" @click="minZoomHandler">
          <img src="https://cdn-app.nio.com/PE/2021/11/11/569137fe-1d17-4764-ab89-81efe6809a68.svg">
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js"

export default {
  props: ['controlStyle', 'tab'],
  methods: {
    playBtnHandler() {
      PubSub.publish('showVideoComp')
      const sensors = window['sensorsDataAnalytic201505']
      if (sensors) {
        sensors.track('nions_chargingmaph5_videoentry_click')
      }
    },
    resourceBtnHandler() {
      PubSub.publish('locationMyPosition')
    },
    maxZoomHandler() {
      this.$emit('maxZoomHandler')
    },
    minZoomHandler() {
      this.$emit('minZoomHandler')
    },
  }
}
</script>

<style scoped>
.play-btn, .bottom-btn-group {
  position: absolute;
  right: 0.15rem;
  z-index: 2000;
}

.play-btn {
  top: 0.25rem;
}

.bottom-btn-group {
  bottom: 0.85rem;
}

.img-btn {
  width: 0.4rem;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.play-btn img, .resource-btn img{
  width: 0.22rem;
  height: 0.22rem;
}

.zoom-btn-group {
  margin-top: 0.1rem;
}
.max-zoom-btn {
  margin-bottom: 0.02rem;
}
</style>