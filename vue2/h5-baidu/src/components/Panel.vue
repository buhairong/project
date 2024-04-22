<template>
  <div class="panel" ref="panel" v-loading="panel.loading">
    <div
      v-if="panel.showCollapse"
      style="height: 20px; text-align: center"
      @click="toggle"
    >
      <div class="toggle">
        <img
          class="-invisible -internal"
          :src="
            panel.collapsed
              ? 'images/panel/toggle-e.png'
              : 'images/panel/toggle-c.png'
          "
          width="26px"
          height="8px"
        />
      </div>
    </div>
    <div v-else style="height: 20px"></div>
    <div @touchstart="startMove" @touchmove="moving" @touchend="stopMove">
      <div
        class="trans-panel"
        style="height: 285px; overflow: hidden; position: relative"
        ref="poiPanel"
      >
        <div v-if="panel.showSearch" @click="showSearchPanel" class="search">
          <img
            class="-invisible -internal"
            src="images/search.png"
            width="24px"
            height="24px"
          />
          <span>查找地点、资源</span>
        </div>
        <div
          @click="closePanel"
          v-if="panel.showClose"
          style="position: absolute; top: 0; right: 0"
        >
          <img class="-invisible -internal" src="images/close.png" width="30" />
        </div>
        <div v-if="panel.showSearch" style="height: 15px"></div>
        <div class="title" :style="{ width: panel.showClose ? '275px' : '' }">
          {{ panel.title }}
        </div>
        <div
          v-if="panel.showDistance"
          class="distance"
          @click="panel.showDistancePanel = true"
        >
          <span>附近{{ panel.distance }}km资源</span>
          <i class="el-icon-caret-bottom" style="margin-left: 3px"></i>
        </div>
        <div v-else class="distance">
          <span>资源情况</span>
        </div>
        <div class="card-row">
          <Card
            title="站"
            :data="[{ num: panel.data.swap, unit: '座' }]"
            icon="1"
          />
          <Card
            title="超充站"
            :data="[
              { num: panel.data.Npc[0], unit: '座' },
              { num: panel.data.Npc[1], unit: '根' },
            ]"
            icon="2"
          />
        </div>
        <div class="card-row">
          <Card
            title="目的地充电站"
            :data="[
              { num: panel.data.Dest[0], unit: '座' },
              { num: panel.data.Dest[1], unit: '根' },
            ]"
            icon="3"
          />
          <Card
            title="接入第三方充电桩"
            :data="[{ num: panel.data.third, unit: '根' }]"
            icon="4"
          />
        </div>
        <div class="card-row">
          <HalfCard title="覆盖全国的一键服务" icon="5" />
        </div>
      </div>
      <div style="height: 20px"></div>
    </div>
    <el-drawer
      :modal-append-to-body="false"
      ref="drawDistance"
      :visible.sync="panel.showDistancePanel"
      title="距离范围"
      direction="btt"
      :size="size"
      :show-close="false"
    >
      <div @click="closeDistance" class="close">
        <img
          class="-invisible -internal"
          src="images/close.png"
          width="30px"
          height="30px"
        />
      </div>
      <div style="padding-left: 25px; padding-right: 25px">
        <div class="description">附近{{ panel.distancePre }}km资源</div>
        <div>
          <el-slider
            v-model="panel.distancePre"
            :show-tooltip="false"
            :min="1"
            :max="20"
          ></el-slider>
        </div>
        <div class="marker">
          <div>1km</div>
          <div>20km</div>
        </div>
        <div>
          <div @click="confirmDistance" class="btn">确定</div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Card from "@/components/Card";
import HalfCard from "@/components/HalfCard";
import PubSub from "pubsub-js";

export default {
  name: "Panel",
  props: ["panel", "isPc"],
  components: { Card, HalfCard },
  methods: {
    confirmDistance() {
      this.panel.distance = this.panel.distancePre;
      this.$refs.drawDistance.closeDrawer();
      PubSub.publish("changeDistance", this.panel.distance);
    },
    closeDistance() {
      this.$refs.drawDistance.closeDrawer();
    },
    toggle() {
      this.panel.collapsed = !this.panel.collapsed;
      this.setPanelHeight();
    },
    setPanelHeight() {
      const h = this.calPanelHeight();
      if (!this.panel.collapsed) {
        this.$refs.poiPanel.style.height = h + "px";
      } else {
        this.$refs.poiPanel.style.height = h + "px";
      }
      PubSub.publish("moveNav", h);
    },
    closePanel() {
      PubSub.publish("closePanel");
    },
    calPanelHeight() {
      if (this.panel.collapsed) {
        if (this.panel.showSearch) {
          return 45;
        } else {
          return 28;
        }
      } else {
        if (!this.panel.showSearch) {
          return 225;
        }
        return 285;
      }
    },
    showSearchPanel() {
      PubSub.publish("showSearchPanel");
    },
    startMove(e) {
      this.canMove = true;
      this.startTime = new Date().getTime();
      this.startY = e.targetTouches[0].pageY;
      this.height = this.calPanelHeight();
    },
    stopMove() {
      this.canMove = false;
      this.endTime = new Date().getTime();
      const duration = this.endTime - this.startTime;
      if (duration > 90) {
        if (this.endY - this.startY > 20) {
          this.panel.collapsed = true;
          this.setPanelHeight();
        } else if (this.startY - this.endY > 20) {
          this.panel.collapsed = false;
          this.setPanelHeight();
        }
      }
    },
    moving(e) {
      if (this.canMove) {
        this.endY = e.targetTouches[0].pageY;
        // let offset = e.targetTouches[0].pageY - this.startY
        // let h = this.height - offset
        // if (h < this.height && h > 0)
        //   this.$refs.poiPanel.style.height = h + 'px'
      }
    },
    handleClose() {},
  },
  mounted() {
    if (this.isPc) {
      this.size = 240;
    }
  },
  data() {
    return {
      canMove: false,
      startY: 0,
      endY: 0,
      height: 0,
      size: 281,
    };
  },
};
</script>

<style scoped>
#wrapper-pc .panel {
  width: 315px;
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

.trans-panel {
  transition: all 0.3s ease 0s;
}

.search {
  height: 45px;
  background: #f7f7f8;
  font-size: 16px;
  color: #9b9da9;
  font-weight: 400;
  line-height: 45px;
  border-radius: 2px;
}

.search img {
  margin-left: 20px;
  margin-top: -3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.search span {
  margin-left: 10px;
}

.title {
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  color: #000f16;
  letter-spacing: 0;
  font-weight: 500;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.distance {
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
  font-size: 14px;
  color: #000f16;
  letter-spacing: 0.17px;
  font-weight: 400;
}

.card-row {
  display: flex;
  margin-top: 20px;
}

.toggle {
  transform: translateY(-2px);
}

#wrapper-pc .btn {
  border-radius: unset;
}

.btn {
  margin-top: 35px;
  width: 100%;
  height: 45px;
  background: #00bebe;
  border-radius: 225px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  text-align: center;
  line-height: 45px;
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
}
</style>
