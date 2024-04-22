<template>
  <div class="panel" :style="{'z-index': '2', 'left':isPc?(left+x+'px'):'', 'top':isPc?(top+y+'px'):''}" ref="resPanel" v-loading="panel.loading">
    <div style="height: 20px"></div>
    <div style="position: relative">
      <div @click="closePanel" style="position: absolute; top:0; right: 0">
        <img class="nio-invisible nio-internal" src="images/close.png" width="30">
      </div>
      <div class="title"><span v-show="data.type==5">会客点：</span>{{ data.title }}</div>
      <div v-if="data.tag&&data.tag.length>0" class="tag-line">
        <div v-for="(e, i) in data.tag" class="tag" :key="i">{{ e }}</div>
      </div>
      <div v-if="data.type!=5">
        <div class="addr">{{ data.address }}</div>
      </div>
      <div v-if="data.type==1">
        <div class="resource" style="height: 50px;line-height: 50px;">
          <img class="icon nio-invisible nio-internal" src="images/res/battery.png" width="16" height="16">
          <div class="unit">可用电池<span class="num">{{ data.valid }}</span>块</div>
          <div class="unit">电池总数<span class="num">{{ data.battery }}</span>块</div>
        </div>
        <div class="line"></div>
        <div style="height: 15px"></div>
        <div class="resource">
          <img class="icon-free nio-invisible nio-internal" src="images/res/free.png" width="16" height="16">
          <div>{{ data.fee }}<span class="fee-suffix">*</span></div>
        </div>
        <div style="height: 10px"></div>
        <div class="addr">{{ data.desc }}</div>
        <div style="height: 15px"></div>
      </div>
      <div v-if="data.type==2||data.type==3||data.type==4">
        <div class="resource" style="height: 50px;line-height: 50px;">
          <img class="icon nio-invisible nio-internal" src="images/res/charge.png" width="16" height="16">
          <div v-if="data.dc" class="unit">快充总数<span class="num">{{ data.dc }}</span>根</div>
          <div v-if="data.ac" class="unit">慢充总数<span class="num">{{ data.ac }}</span>根</div>
        </div>
      </div>
      <div v-if="data.type==5">
        <div class="desc">
          <div>当换电站只建设在单向服务区反向就用会客点表示，用户到会客点后请联系专员，由专员开车给用户换电</div>
        </div>
        <div style="height: 10px"></div>
        <div class="line"></div>
        <div class="available">
          <img class="icon nio-invisible nio-internal" src="images/res/available.png" width="16" height="16">
          <div class="text">可达：{{ data.title }}</div>
        </div>
      </div>
    </div>
    <div class="nio">下载NIO App，了解更多</div>
    <div style="height: 20px"></div>
    <div v-show="panel.left" class="arrow" style="left: -12px;">
      <i class="el-icon-caret-left"></i>
    </div>
    <div v-show="panel.right" class="arrow" style="right: -12px;">
      <i class="el-icon-caret-right"></i>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: "ResPanel",
  props: ['data', 'panel', 'isPc'],
  data() {
    return {
      top: null,
      left: null,
      x: 0,
      y: 0,
    }
  },
  methods: {
    closePanel() {
      PubSub.publish('closePanel')
    },
    getHeight() {
      return this.$refs.resPanel.offsetHeight;
    },
    setLocation(left, top, x, y) {
      this.left = left
      this.top = top
      this.x = x
      this.y = y
    },
    move(x, y) {
      this.x = x
      this.y = y
    }
  },
}
</script>

<style scoped>
#wrapper-pc .panel {
  width: 315px;
  bottom: unset;
  transform: translateY(-50%);
}

.arrow {
  transform: scale(2);
  position: absolute;
  top: calc(50% - 12px);
  color: white;
}

.panel {
  position: fixed;
  width: calc(100% - 60px);
  bottom: 34px;
  left: 15px;
  background: white;
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 0 15px 0 15px;
  border-radius: 10px;
}

.title {
  line-height: 28px;
  font-size: 20px;
  color: #000F16;
  letter-spacing: 0;
  font-weight: 500;
  margin-bottom: 6px;
  padding-right: 34px;
}

.tag-line {
  margin-bottom: 14px;
  height: 20px;
}

.tag {
  display: inline-block;
  margin-right: 5px;
  font-size: 10px;
  color: #004B64;
  background: #E6FAFA;
  border-radius: 2px;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
}

.fee-suffix {
  color: #9B9DA9;
  margin-left: 1px;
}

.addr {
  font-size: 12px;
  color: #9B9DA9;
}

.desc {
  font-size: 12px;
  color: #9B9DA9;
}

.line {
  height: 1px;
  background: #F0F1F2;
}

.resource {
  font-size: 14px;
  color: #000F16;
  position: relative;
  padding-left: 21px;
}

.icon {
  position: absolute;
  left: 0;
  top: 18px;
}

.icon-free {
  position: absolute;
  left: 0;
  top: 2px;
}

.unit {
  display: inline-block;
  margin-right: 15px;
}

.num {
  margin-left: 5px;
  font-weight: 700;
  font-size: 14px;
}

.nio {
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
  border: 1px dashed #F0F1F2;
  border-radius: 2px;
  font-size: 12px;
  color: #9B9DA9;
  padding-left: 10px;
}

.available {
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
}

.text {
  margin-left: 21px;
  font-size: 14px;
}
</style>