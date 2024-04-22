<template>
  <div class="poster-wrapper">
    <div class="poster" ref="poster">
      <div style="padding-left: 30px; padding-right: 30px; padding-top: 30px">
        <div>
          <img class="nio-invisible nio-internal" src="images/logo.png" width="41px">
        </div>
        <div class="title">
          <p>{{ panel.title }}</p>
        </div>
        <div v-if="panel.showDistance" class="distance">
          附近{{ panel.distance }}km资源
        </div>
        <div v-else class="distance">
          资源情况
        </div>
        <div class="card-row">
          <Card title="换电站" :data="[{num:panel.data.swap,unit:'座'}]" icon="1"/>
          <Card title="超充站" :data="[{num:panel.data.nioNpc[0],unit:'座'}, {num:panel.data.nioNpc[1],unit:'根'}]"
                icon="2"/>
        </div>
        <div class="card-row">
          <Card title="目的地充电站" :data="[{num:panel.data.nioDest[0],unit:'座'}, {num:panel.data.nioDest[1],unit:'根'}]"
                icon="3"/>
          <Card title="接入第三方充电桩" :data="[{num:panel.data.third,unit:'根'}]" icon="4"/>
        </div>
        <div class="card-row">
          <HalfCard title="覆盖全国的一键加电服务" icon="5"/>
        </div>
        <div class="date">截至{{ dateStr }}</div>
      </div>
      <div>
        <img class="poster-background nio-invisible nio-internal" :src="posterImg">
      </div>
      <div style="position:absolute; right: 30px; top: 40px">
        <img class="nio-invisible nio-internal" src="images/NIOPower.png" width="117px">
      </div>
    </div>
    <div v-show="ready" class="poster-img">
      <img class="nio-invisible nio-internal" :src="canvasImgUrl" ref="posterImage">
    </div>
    <div class="button-panel">
      <div class="button cancel" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card';
import HalfCard from '@/components/HalfCard';
import PubSub from 'pubsub-js';
import html2canvas from 'html2canvas';

export default {
  name: 'Poster',
  components: {Card, HalfCard},
  props: ['panel', 'posterImg', 'city', 'position'],
  data() {
    return {
      isDom: true,
      canvasImgUrl: null,
      ready: false,
      dateStr: '',
      url: window.location.href,
    };
  },
  mounted() {
    // let h = document.body.clientHeight
    // this.$refs.poster.style.width = (h) * 375 / 812 + 'px'
    let d = new Date();
    let dateStr = d.getFullYear() + '.';
    let m = d.getMonth() + 1;
    if (m < 10) {
      dateStr += '0';
    }
    dateStr += m + '.';
    let date = d.getDate();
    if (date < 10) {
      dateStr += '0';
    }
    dateStr += date;
    this.dateStr = dateStr;

    const _this = this;
    window.onresize = () => {
      console.log(document.body.clientHeight);
      _this.$refs.posterImage.style.height = document.body.clientHeight - 170 + 'px';
      _this.$refs.posterImage.style.marginTop = '30px';
      _this.$refs.posterImage.style.marginLeft = (document.body.clientWidth - ((document.body.clientHeight - 170) * 375 / 812)) / 2 + 'px';
    };
  },
  methods: {
    async saveCdn(imgData) {
      let data = imgData.replace('data:image/png;base64,', '');
      const token = 'weLQLkUJLWp1K6QvBXvwcWYzh-lEA0SePJkwRaIW:H-pZkuakb8OdjmsFOVO_Soca_DE=:eyJzY29wZSI6ImNoYXJnZXJtYXAiLCJkZWFkbGluZSI6MTYyNzU0NjE2Nn0=';
      const url = 'https://upload.qiniup.com/putb64/-1';
      const options = {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Authorization': `UpToken ${token}`,
        }
      };
      const res = await axios.post(url, data, options);
      if (res.data.key) {
        return `http://qruqtkf6z.hd-bkt.clouddn.com/${res.data.key}`;
      }
    },
    createImg() {
      this.ready = false;
      setTimeout(() => {
        this.htmlToCanvas();
      }, 500);
    },
    save() {
      this.htmlToCanvas();
    },
    cancel() {
      PubSub.publish('hidePoster');
    },
    htmlToCanvas() {
      const opts = {
        useCORS: true,
        logging: false
      };
      const ua = navigator.userAgent || '';
      const isIOS = /iphone|ipad|ipod/i.test(ua);
      if (isIOS) {
        opts.scale = 3;
      }
      html2canvas(this.$refs.poster, opts).then(async(canvas) => {
        let imgUrl = canvas.toDataURL('image/png');
        this.canvasImgUrl = imgUrl;
        // this.isDom = false
        this.$refs.posterImage.style.height = document.body.clientHeight - 170 + 'px';
        this.$refs.posterImage.style.marginTop = '30px';
        this.$refs.posterImage.style.marginLeft = (document.body.clientWidth - ((document.body.clientHeight - 170) * 375 / 812)) / 2 + 'px';
        this.ready = true;
        if (!isIOS) {
          this.canvasImgUrl = await this.saveCdn(imgUrl);
        }
        let sensors = window['sensorsDataAnalytic201505'];
        if (sensors) {
          sensors.track('ChargingMapH5ShareDownload', {});
        }
      });
    },
  }
};
</script>

<style scoped>
.poster-wrapper {
  top: 0;
  left: 0;
  height: calc(100%);
  width: calc(100%);
  position: fixed;
  z-index: 20;
}

#qrcode {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  margin-bottom: 6px;
  background: white;
  padding: 4px;
}

.poster {
  position: absolute;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  height: 812px;
  width: 375px;
  /*width: calc(100% - 60px);*/
  background: #FFFFFF;
  font-weight: 400;
  color: #000F16;
  top: 2000px;
}

.poster-background {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.poster-img {
}

.title {
  margin-top: 30px;
  font-size: 20px;
  color: #000F16;
  letter-spacing: 0;
  font-weight: 500;
  width: 100%;
}

.title p {
  margin: 0;
  padding: 0;
}

.distance {
  margin-top: 10px;
  font-size: 14px;
  color: #000F16;
  letter-spacing: 0.17px;
  font-weight: 400;
}

.card-row {
  display: flex;
  margin-top: 20px;
}

.date {
  margin-top: 20px;
  font-size: 10px;
  color: #9B9DA9;
}

.button-panel {
  padding: 0 25px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 50px);
  height: 100px;
  text-align: center;
}

.button {
  border: 1px solid #F0F1F2;
  border-radius: 225px;
  height: 45px;
  line-height: 45px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin: 0 auto
}

.confirm {
  color: #00BEBE;
}

.cancel {
  color: #696D7F;
}

</style>
