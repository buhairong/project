<template>
  <div style="width: 100%;height: 100%;">
    <div class="loading-img" v-if="showLoadingImg">
      <div class="img-wrap">
        <div class="img">
          <img src="https://cdn-app.nio.com/pe/ns/openbg.png">
        </div>
      </div>
      <div class="loading-msg">
          <div class="spinner" v-html="spinnerSvg"></div>
          <div class="tip">正在进入...</div>
        </div>
    </div>
    <div id="wrapper">
      <!-- <div class="tabs">
        <div 
          class="tab distribute" 
          :class="{'active-tab': activeTab === 'distribute'}" 
          @click="changeTab('distribute')"
        >
          看分布
        </div>
        <div 
          class="tab resource" 
          :class="{'active-tab': activeTab === 'resource'}" 
          @click="changeTab('resource')"
        >
          找资源
        </div>
      </div> -->
      <div v-if="config" style="height:100%;">
        <distribute 
          v-show="activeTab === 'distribute'"
          :config="config"
          :activeTab="activeTab"
          class="distribute"
        />
        <resource
          v-if="initLoaded"
          v-show="activeTab === 'resource'" 
          :showMyLocation="showMyLocation" 
          :config="config"
          @clearMylocationFlag="clearMylocationFlag"
        />
      </div>
    </div>
    <div class="video-wrap" :class="showVideoComp ? 'open-video-comp' : 'close-video-comp'">
      <div class="video-play-wrap" v-if="showVideoMedia" @click="closeVideo">
        <video :src="curVideoSrc" controls autoplay loop>您的浏览器不支持视频播放</video>
        <img 
          class="close-video" 
          src="https://cdn-app.nio.com/pe/ns/closebtn.svg"
          @click="closeVideo"
        >
      </div>
      <div class="header">
        <div class="title">
          <div class="logo">
            <img src="https://cdn-app.nio.com/PE/2021/11/18/b2881d64-e4d7-499e-ab0f-ed9a2f159edd.svg">
          </div>
          <div class="close-btn" @click="close">
            <img src="https://cdn-app.nio.com/PE/2021/11/11/c44ae7f8-3102-4f6e-be91-08d6c60b036c.svg">
          </div>
        </div>
        <div class="tip">可充可换可升级的智能加电体系</div>
      </div>
      <div class="video-list-wrap" :class="{'more-len': videoList.length >= 3 }">
        <div 
          class="video-item"
          :class="{'less-len': videoList.length <= 2 }"
          v-for="item in videoList"
          :key="item.id"
        >
          <div class="poster">
            <div class="mask"></div>
            <img :src="item.imgUrl">
            <img 
              class="play-btn" 
              src="https://cdn-app.nio.com/pe/ns/playbtn.svg"
              @click="playVideo(item)"
            >
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getConfig } from '@/api/ns'
import distribute from '../pc/components/distribute.vue'
import resource from '../pc/components/resource.vue'
import { loadingSvg, spinnerSvg } from '@/utils/svg'
import PubSub from "pubsub-js"

export default {
  components: {distribute, resource},
  data() {
    return {
      activeTab: 'distribute',
      showMyLocation: true,
      config: null,
      loadingSvg,
      spinnerSvg,
      showLoadingImg: true,
      videoList: [
        {
          id: 1,
          title: 'NIO Power | 五纵三横四大都市圈_高速换电站网络布局',
          imgUrl: 'https://cdn-app.nio.com/pe/ns/post3.svg',
          videoUrl: 'https://power-micro-apps.nio.com/video/wuhengsanzong.WebM',
        },
        {
          id: 2,
          title: 'NIO Power | 蔚来第二代换电站',
          imgUrl: 'https://cdn-app.nio.com/pe/ns/post1.svg',
          videoUrl: 'https://power-micro-apps.nio.com/video/erdaihuandzhan.WebM',
        },
        {
          id: 3,
          title: '蔚来能源云 | 全球首创全方位能源服务',
          imgUrl: 'https://cdn-app.nio.com/pe/ns/post2.svg',
          videoUrl: 'https://power-micro-apps.nio.com/video/nengyuanyun.WebM',
        },
      ],
      curVideoSrc: '',
      showVideoMedia: false,
      showVideoComp: false,
      initLoaded: false,
    }
  },

  mounted() {
    this.getConfig()
    this.loadingHander()
    PubSub.subscribe('showVideoComp', () => {
      this.showVideoComp = true
    })
    PubSub.subscribe('locationMyPosition', () => {
      this.showMyLocation = true
      this.activeTab = 'resource'
    })
  },

  methods: {
    loadingHander() {
      let timer = setTimeout(() => {
        this.showLoadingImg = false
        clearTimeout(timer)
        timer = null
      }, 5000)
    },

    changeTab(tab) {
      this.activeTab = tab
      const sensors = window['sensorsDataAnalytic201505']
      if (tab === 'resource') {
         this.initLoaded = true
         if (sensors) {
          sensors.track('nions_chargingmaph5_distributepage_view', {})
        }
      } else {
        if (sensors) {
          sensors.track('nions_chargingmaph5_findresourcespage_view', {})
        }
      }
    },

    getConfig() {
      getConfig(this, (config) => {
        this.config = config
      })
    },

    clearMylocationFlag() {
      this.showMyLocation = false
    },

    close() {
      this.showVideoComp = false
    },

    playVideo(item) {
      this.curVideoSrc = item.videoUrl
      this.showVideoMedia = true
      const sensors = window['sensorsDataAnalytic201505']
      if (sensors) {
        sensors.track('nions_chargingmaph5_video_click')
      }
    },

    closeVideo() {
      this.showVideoMedia = false
    },
  },
}
</script>

<style scoped>
#wrapper {
  height: 100%;
  width:100vw;
  position: relative;
}
.distribute {
  height: 100%;
}
.tabs {
  position: absolute;
  top: 0.36rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  display: flex;
}
.tab {
  width: 0.96rem;
  height: 0.36rem;
  background-color: #F7F7F8;
  color: #9B9DA9;
  font-size: 0.16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0.02rem solid #fff;
}
.distribute {
  border-radius: 1rem 0px 0px 1rem;
}
.resource {
  border-radius: 0px 1rem 1rem 0px;
}
.active-tab {
  color: #363C54;
  background-color: #fff;
  font-weight: 500;
}
.loading-img {
  width: 100vw;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2500;
  display: flex;
  align-items: center;
}
.img-wrap {
  width: 100%;
  position: relative;
}
.img-wrap .img{
  width: 100%;
}
.img-wrap .img img{
  width: 100%;
}
.loading-msg {
  position: absolute;
  left: 50%;
  bottom: 0.5rem;
  transform: translateX(-50%);
  z-index: 2200;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-msg .spinner {
  width: 0.24rem;
  height: 0.24rem;
  animation: spinner 1.5s infinite linear;
}
.loading-msg .tip {
  color: #fff;
  font-size: 0.16rem;
  padding-left: 0.1rem;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.video-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  z-index: 2500;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  transition: top .5s ease;
}
.close-video-comp {
  top: 100vh;
}
.open-video-comp {
  top: 0;
}
.video-wrap .header {
  padding: 0.25rem;
}
.video-wrap .header .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.video-wrap .header .title .logo img {
  width: 2.1rem;
  height: 0.32rem;
}

.close-btn img {
  width: 0.28rem;
  height: 0.28rem;
}

.video-wrap .tip {
  color: #040B29;
  font-size: 0.16rem;
  padding-top: 0.15rem;
}

.video-list-wrap {
  flex: 1;
  overflow: auto;
  padding: 0 0.25rem 0.25rem;
  display: flex;
  flex-wrap: wrap;
}

.less-len {
  margin-right: 0.15rem;
}

.more-len {
  justify-content: space-between;
}

.video-item {
  padding-bottom: 0.25rem;
  width: 32%;
}

.video-item .poster {
  width: 100%;
  position: relative;
}

.video-item .mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #040B29;
  opacity: 0.2;
  z-index: 2550;
}

.video-item .poster img {
  width: 100%;
  height: 100%;
}

.video-item .poster .play-btn {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2600;
}

.video-item .title {
  padding-top: 0.1rem;
  font-size: 0.16rem;
  line-height: 0.22rem;
  color: #000000;
}
.video-play-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2700;
}
.close-video {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 0.32rem;
  height: 0.32rem;
  z-index: 2800;
}
</style>
