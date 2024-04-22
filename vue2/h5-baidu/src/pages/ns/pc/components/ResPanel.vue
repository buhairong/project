<template>
  <div class="panel" :style="{'left':(left+x+'px'), 'top':(top+y+'px')}" ref="resPanel">
    <div class="header">
      <div class="logo">
        <img :src="logo">
      </div>
      <div class="name">
        {{resType}} {{data.name}}
      </div>
      <div class="close-btn" @click="closePanel">
        <img src="https://cdn-app.nio.com/PE/2021/11/11/c44ae7f8-3102-4f6e-be91-08d6c60b036c.svg">
      </div>
    </div>
    <div class="info-wrap">
      <div class="info-item">
        <div class="icon">
          <img src="https://cdn-app.nio.com/PE/2021/11/17/28f9b02e-890b-4143-b4d8-5f7f354496dc.svg" >
        </div>
        <div class="info-content">{{data.operator_name}}</div>
      </div>
      <div class="info-item">
        <div class="icon">
          <img src="https://cdn-app.nio.com/PE/2021/11/17/d27c980b-9d14-4678-9162-3c0123e1be1f.svg" >
        </div>
        <div class="info-content">{{data.address}}</div>
      </div>
      <div class="info-item" v-if="data.right_desc_summary">
        <div class="icon">
          <img src="https://cdn-app.nio.com/pe/ns/quanyi.svg" >
        </div>
        <div class="info-content">
          <div class="desc">
            {{data.right_desc_summary}}
          </div>
          <div class="desc-detail" v-if="data.right_desc_detail_array && data.right_desc_detail_array.length">
            <div class="desc-detail-item" v-for="(item, index) in data.right_desc_detail_array" :key="index">
              {{item}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="panel.left" class="arrow" style="left: -10px;">
      <i class="el-icon-caret-left"></i>
    </div>
    <div v-show="panel.right" class="arrow" style="right: -10px;">
      <i class="el-icon-caret-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResPanel",
  props: ['data', 'panel'],
  data() {
    return {
      top: null,
      left: null,
      x: 0,
      y: 0,
    }
  },
  computed: {
    logo() {
      let logo = 'https://cdn-app.nio.com/PE/2021/11/16/c8d14f10-30e1-4c83-8171-2e48ecc4af81.svg'
      if (this.data.type === 'PowerSwap') {
        logo = 'https://cdn-app.nio.com/PE/2021/11/16/c8d14f10-30e1-4c83-8171-2e48ecc4af81.svg'
      } else if (this.data.type === 'ChargeStation' && this.data.charge_station_type === 'NioChargeStationNpc') {
        logo = 'https://cdn-app.nio.com/PE/2021/11/16/90a1e400-1cb8-4711-b82a-5a17d55860f3.svg'
      } else if (this.data.type === 'ChargeStation' && this.data.charge_station_type === 'NioChargeStationDest') {
        logo = 'https://cdn-app.nio.com/PE/2021/11/16/6260cdb1-15a5-41e3-8421-c314e01231b3.svg'
      } else if (this.data.type === 'ChargeStation' && this.data.charge_station_type === 'ThirdChargeStation') {
        logo = 'https://cdn-app.nio.com/PE/2021/11/16/c9dd6e6c-5205-4137-8fd2-13633407ff3f.svg'
      }
      return logo
    },
    resType() {
      let type = '蔚来充电站'
      if (this.data.type === 'PowerSwap') {
        type = '蔚来换电站'
      } else if (this.data.type === 'ChargeStation' && this.data.charge_station_type === 'NioChargeStationNpc') {
        type = '蔚来充电站'
      } else if (this.data.type === 'ChargeStation' && this.data.charge_station_type === 'NioChargeStationDest') {
        type = '蔚来充电站'
      } else if (this.data.type === 'ChargeStation' && this.data.charge_station_type === 'ThirdChargeStation') {
        type = '三方充电站'
      }
      return type
    }
  },
  methods: {
    closePanel() {
      this.$emit('closePanel')
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
    },
  },
}
</script>

<style scoped>
.arrow {
  transform: scale(3);
  position: absolute;
  top: 57px;
  color: white;
}

.panel {
  position: fixed;
  width: 364px;
  left: 15px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 10px;
  z-index: 2200;
}

.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
}

.header .logo {
  width: 70px;
  height: 70px;
}

.header .name {
  flex: 1;
  padding-left: 10px;
  padding-right: 20px;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  color: #040B29;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.header .close-btn {
  width: 28px;
  height: 28px;
}

.info-wrap {
  padding-top: 15px;
}
.info-item {
  display: flex;
  padding-bottom: 10px;
}
.info-item:last-child {
  padding-bottom: 0;
}
.info-item .icon {
  height: 20px;
  padding-right: 5px;
  display: flex;
  align-items: center;
}
.info-item .icon img {
  width: 16px;
  height: 16px;
}
.info-item .info-content {
  flex: 1;
  color: #040B29;
  font-size: 14px;
  line-height: 20px;
}
.desc-detail {
  padding-top: 5px;
}
.desc-detail-item {
  font-size: 12px;
  color: #9B9DA9;
  line-height: 20px;
}
</style>