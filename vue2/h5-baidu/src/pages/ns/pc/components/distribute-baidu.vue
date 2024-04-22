<template>
  <div class="wrap">
    <div id="distribute-map" ref="distribute"></div>
    <div class="foot">
      <div class="search-warp">
        <div class="btn-group">
          <div
            class="filter-btn"
            :class="{ 'active-btn': item.isSelect }"
            v-for="item in summary"
            :key="item.id"
            @click="filterBtnClickHandler(item.id)"
          >
            <img :src="item.icon" />
            <div>{{ item.title }}</div>
            <div class="showText">{{ item.showText }}</div>
          </div>
        </div>
      </div>
    </div>
    <control
      :controlStyle="controlStyle"
      tab="distribute"
      @maxZoomHandler="maxZoomHandler"
      @minZoomHandler="minZoomHandler"
    />
    <ResPanel
      v-show="showResource"
      :data="res"
      ref="resPanel"
      :panel="resPanel"
      @closePanel="closePanel"
    />
  </div>
</template>

<script>
import { getSummary, getAround } from "@/api/ns";
import Control from "./control.vue";
import { formatAround } from "@/utils/util";
import ResPanel from "./ResPanel";

export default {
  components: { Control, ResPanel },
  props: ["config"],
  data() {
    return {
      distributeMap: null,
      thirdLayer: "",
      summary: {
        swap: {
          id: "swap",
          title: "站",
          isSelect: false,
          icon: "https://cdn-app..com/pe/ns/swapbtn.svg",
          showText: "",
        },
        npc: {
          id: "npc",
          title: "超充站",
          isSelect: false,
          icon: "https://cdn-app..com/pe/ns/superchargebtn.svg",
          showText: "",
        },
        dest: {
          id: "dest",
          title: "目的地充电站",
          isSelect: false,
          icon: "https://cdn-app..com/pe/ns/destbtn.svg",
          showText: "",
        },
        third: {
          id: "third",
          title: "接入第三方充电桩",
          isSelect: false,
          icon: "https://cdn-app..com/pe/ns/thirdbtn.svg",
          showText: "",
        },
      },
      controlStyle: {
        borderRadius: "0.1rem",
        backgroundColor: "rgba(255, 255, 255, 1)",
        border: "0.01rem solid #fff",
      },
      countryPowers: null,
      markers: [],
      marker: null,
      tmpRes: null,
      tmpBigRes: {},
      mapMarkers: [],
      maxZoom: 7.7,
      minZoom: 5.7,
      currentZoom: 5.7,
      center: new window.BMapGL.Point(105.058074, 37.000963),
      markerSize: {
        small: { width: 12, height: 12 }, //level 4
        middle: { width: 24, height: 24 }, // level 5-6
        large: { width: 32, height: 32 }, // level 7
      },
      showResource: false,
      res: {},
      resPanel: {
        left: true,
        right: false,
      },
      mapOffet: { x: 0, y: 0 },
      touchStart: { x: 0, y: 0 },
      diff: { x: 0, y: 0 },
      selectId: null,
      bounds: null,
      cacheMarks: {
        swap: [],
        npc: [],
        dest: [],
      },
    };
  },

  mounted() {
    this.initBaidu();
    this.getSummary();
    this.getAround();
  },

  methods: {
    initBaidu() {
      this.distributeMap = new window.BMapGL.Map("distribute-map", {
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
      });
      this.distributeMap.centerAndZoom(this.center, this.currentZoom);
      this.distributeMap.enableScrollWheelZoom(true);

      let pStart = new window.BMapGL.Point(50, -3);
      let pEnd = new window.BMapGL.Point(165, 70);
      let bounds = new window.BMapGL.Bounds(pStart, pEnd);
      this.distributeMap.setBounds(bounds);
      this.distributeMap.setMapStyleV2({
        styleId: "346e2d9697b296fd0f4b1d04dc3439ee",
      });

      // 底部蓝色大背景

      pStart = new window.BMapGL.Point(-180, -90);
      pEnd = new window.BMapGL.Point(180, 90);
      bounds = new window.BMapGL.Bounds(pStart, pEnd);
      let imgOverlay = new window.BMapGL.GroundOverlay(bounds, {
        type: "image",
        url: "https://cdn-app..com/PE/2021/11/5/4aea249d-ae6a-4400-9a6c-3ee6be681b30.svg",
        opacity: 1,
      });
      this.distributeMap.addOverlay(imgOverlay);

      // 白色蜂窝图
      pStart = new window.BMapGL.Point(72.985651, 17.524126);
      pEnd = new window.BMapGL.Point(135.280584, 53.845794);
      bounds = new window.BMapGL.Bounds(
        new window.BMapGL.Point(pStart.lng, pEnd.lat),
        new window.BMapGL.Point(pEnd.lng, pStart.lat)
      );
      imgOverlay = new window.BMapGL.GroundOverlay(bounds, {
        type: "image",
        url: "https://cdn-app..com/pe/ns/whitebg.svg",
        opacity: 1,
      });
      imgOverlay.setZIndex(3);
      this.distributeMap.addOverlay(imgOverlay);

      for (const item of this.config) {
        if (item.key === "h5_national_model_third_cs_image_url") {
          // 三方热力图
          this.thirdLayer = new window.BMapGL.GroundOverlay(bounds, {
            type: "image",
            url: item.value,
            opacity: 1,
          });
          this.thirdLayer.setZIndex(4);
          this.distributeMap.addOverlay(this.thirdLayer);
        }
      }

      for (const item of this.config) {
        if (item.key === "h5_national_model_route_image_url") {
          // 高速路线图
          imgOverlay = new window.BMapGL.GroundOverlay(bounds, {
            type: "image",
            url: item.value,
            opacity: 1,
          });
          imgOverlay.setZIndex(5);
          this.distributeMap.addOverlay(imgOverlay);
        }
      }

      this.removeLogo();

      this.distributeMap.on("zoomstart", () => {
        this.closePanel();
      });

      this.distributeMap.on("zoomend", () => {
        this.zoomChangedHandler();
      });

      this.distributeMap.on("dragstart", (e) => {
        this.touchStart.x = e.offsetX;
        this.touchStart.y = e.offsetY;
      });

      this.distributeMap.on("dragend", (e) => {
        this.diff.x = e.offsetX - this.touchStart.x;
        this.diff.y = e.offsetY - this.touchStart.y;
        this.dragHandler();
        this.touchStart = { x: 0, y: 0 };
      });

      this.distributeMap.on("dragging", (e) => {
        this.diff.x = e.offsetX - this.touchStart.x;
        this.diff.y = e.offsetY - this.touchStart.y;
        this.dragHandler();
        this.touchStart.x = e.offsetX;
        this.touchStart.y = e.offsetY;
      });

      this.distributeMap.on("click", (e) => {
        if (e.target.id) {
          this.closePanel();
        }
      });
    },

    removeLogo() {
      const map = this.$refs.distribute;
      const logText = map.querySelector(".anchorBL");

      logText.innerHTML = "";
    },

    dragHandler() {
      if (this.showResource) {
        this.$refs.resPanel.left += this.diff.x;
        this.$refs.resPanel.top += this.diff.y;
      }
    },

    showMarkers() {
      if (this.mapMarkers.length > 0) {
        for (let i in this.mapMarkers) {
          let item = this.mapMarkers[i];
          this.updateMarker(item);
        }
        return;
      }
      /*
      for(let i in this.mapMarkers) {
        this.distributeMap.removeOverlay(this.mapMarkers[i])
      }
      this.mapMarkers = []
      */
      for (let i in this.markers) {
        let item = this.markers[i];
        this.addMarker(item);
      }
    },

    updateMarker(item) {
      let w =
        Math.floor(
          ((this.currentZoom - this.minZoom) / (this.maxZoom - this.minZoom)) *
            20
        ) + 20;
      let url = "";
      if (item.resType === "swap") {
        url = "https://cdn-app..com/pe/ns/swappin.svg";
      } else if (item.resType === "npc") {
        url = "https://cdn-app..com/pe/ns/npcpin.svg";
      } else if (item.resType === "dest") {
        url = "https://cdn-app..com/pe/ns/destpin.svg";
      }
      item.setIcon(new window.BMapGL.Icon(url, new window.BMapGL.Size(w, w)));
      item.setOffset(new window.BMapGL.Size(0, -w / 2));
    },

    addMarker(item) {
      let w =
        Math.floor(
          ((this.currentZoom - this.minZoom) / (this.maxZoom - this.minZoom)) *
            20
        ) + 20;
      let loc = item.location.split(",");
      let url = "";
      let zIndex = 15;
      let resType = "";
      if (item.type === "PowerSwap") {
        url = "https://cdn-app..com/pe/ns/swappin.svg";
        resType = "swap";
      } else if (
        item.type === "ChargeStation" &&
        item.charge_station_type === "ChargeStationNpc"
      ) {
        url = "https://cdn-app..com/pe/ns/npcpin.svg";
        zIndex = 14;
        resType = "npc";
      } else if (
        item.type === "ChargeStation" &&
        item.charge_station_type === "ChargeStationDest"
      ) {
        url = "https://cdn-app..com/pe/ns/destpin.svg";
        zIndex = 13;
        resType = "dest";
      }
      if (url) {
        let mark = new window.BMapGL.Marker(
          new window.BMapGL.Point(loc[0], loc[1]),
          {
            icon: new window.BMapGL.Icon(url, new window.BMapGL.Size(w, w)),
            offset: new window.BMapGL.Size(0, -w / 2),
          }
        );
        mark.setZIndex(zIndex);
        mark.id = item.id;
        mark.resType = resType;
        this.distributeMap.addOverlay(mark);
        this.mapMarkers.push(mark);
        if (resType == "swap") {
          this.cacheMarks.swap.push(mark);
        } else if (resType == "npc") {
          this.cacheMarks.npc.push(mark);
        } else if (resType == "dest") {
          this.cacheMarks.dest.push(mark);
        }

        let _this = this;
        mark.addEventListener("click", function (e) {
          if (_this.tmpBigRes) {
            _this.distributeMap.removeOverlay(_this.tmpBigRes);
          }
          if (_this.tmpRes) {
            _this.tmpRes.show();
          }
          let id = e.target.id;
          for (let i in _this.markers) {
            if (_this.markers[i].id == id) {
              _this.res = _this.markers[i];
              _this.selectId = id;
              break;
            }
          }
          for (let i in _this.mapMarkers) {
            if (_this.mapMarkers[i].id == id) {
              _this.tmpRes = _this.mapMarkers[i];
              break;
            }
          }
          if (_this.res) {
            _this.tmpRes.hide();
            _this.showBigMarkers();
            _this.openResource(e.clientX, e.clientY);
            /*
            const sensors = window['sensorsDataAnalytic201505']
            if (sensors) {
              sensors.track('ns_chargingmaph5_resourcespin_click', {
                resourcetype: _this.res.type
              })
            }
            */
          }
        });
      }
    },

    showBigMarkers() {
      const location = this.res.location.split(",");
      let url = "";
      let w = 0;
      let h = 0;
      if (this.res.type === "PowerSwap") {
        url = "https://cdn-app..com/pe/ns/swappinafter.svg";
        w = 72;
        h = 72;
      } else if (
        this.res.type === "ChargeStation" &&
        this.res.charge_station_type === "ChargeStationNpc"
      ) {
        url = "https://cdn-app..com/pe/ns/npcpinafter.svg";
        w = 72;
        h = 72;
      } else if (
        this.res.type === "ChargeStation" &&
        this.res.charge_station_type === "ChargeStationDest"
      ) {
        url = "https://cdn-app..com/pe/ns/destpinafter.svg";
        w = 72;
        h = 72;
      }
      this.tmpBigRes = new window.BMapGL.Marker(
        new window.BMapGL.Point(location[0], location[1]),
        {
          icon: new window.BMapGL.Icon(url, new window.BMapGL.Size(w, h)),
          offset: new window.BMapGL.Size(0, -h / 2),
        }
      );
      this.tmpBigRes.setZIndex(20);
      this.tmpBigRes.id = this.res.id + "scan";

      this.distributeMap.addOverlay(this.tmpBigRes);
    },

    openResource(left, top) {
      const canRight = this.checkCanOpenOnRight(left + 90, 0);
      if (canRight) {
        this.$refs.resPanel.setLocation(left + 60, top - 100, 0, 0);
        this.resPanel.left = true;
        this.resPanel.right = false;
      } else {
        this.$refs.resPanel.setLocation(left - 364 - 100, top - 100, 0, 0);
        this.resPanel.left = false;
        this.resPanel.right = true;
      }
      this.showResource = true;
    },

    checkCanOpenOnRight(start, offset) {
      const windowWidth = document.body.clientWidth;
      if (windowWidth - start - offset > 364) {
        return true;
      } else {
        return false;
      }
    },

    closePanel() {
      this.showResource = false;
      this.selectId = null;
      if (this.tmpBigRes) {
        this.distributeMap.removeOverlay(this.tmpBigRes);
      }
      if (this.tmpRes) {
        this.tmpRes.show();
      }
    },

    getSummary() {
      getSummary(this, (summary) => {
        if (summary.swap_number) {
          this.summary.swap.showText = `${summary.swap_number}座`;
        }

        if (summary._npc_charger_number && summary._npc_connector_number) {
          this.summary.npc.showText = `${summary._npc_charger_number}座/${summary._npc_connector_number}根`;
        } else if (summary._npc_charger_number) {
          this.summary.npc.showText = `${summary._npc_charger_number}座`;
        } else if (summary._npc_connector_number) {
          this.summary.npc.showText = `${summary._npc_connector_number}根`;
        }

        if (summary._dest_charger_number && summary._dest_connector_number) {
          this.summary.dest.showText = `${summary._dest_charger_number}座/${summary._dest_connector_number}根`;
        } else if (summary._dest_charger_number) {
          this.summary.dest.showText = `${summary._dest_charger_number}座`;
        } else if (summary._dest_connector_number) {
          this.summary.dest.showText = `${summary._dest_connector_number}根`;
        }

        if (summary.third_connector_number) {
          this.summary.third.showText = `${summary.third_connector_number}根`;
        }

        const countrySummary = {
          swapShowText: this.summary.swap.showText,
          npcShowText: this.summary.npc.showText,
          destShowText: this.summary.dest.showText,
          thirdShowText: this.summary.third.showText,
        };

        this.$store.commit("setCountrySummary", countrySummary);
      });
    },

    getAround() {
      getAround(
        this,
        (result) => {
          const countryPowers = formatAround(result.powers);
          this.$store.commit("setCountryPowers", countryPowers);
          this.countryPowers = countryPowers;
          this.markers = [
            ...countryPowers.dest,
            ...countryPowers.npc,
            ...countryPowers.swap,
          ];
          this.showMarkers();
        },
        {
          with_national_model: true,
        }
      );
    },

    filterBtnClickHandler(btn) {
      this.summary[btn].isSelect = !this.summary[btn].isSelect;
      const keys = Object.keys(this.summary);
      const selAll =
        keys.every((item) => this.summary[item].isSelect) ||
        keys.every((item) => !this.summary[item].isSelect);
      if (selAll) {
        this.thirdLayer.show();
        /*
        this.markers = [
          ...this.countryPowers.dest,
          ...this.countryPowers.npc,
          ...this.countryPowers.swap,
        ]*/
        for (let i in this.mapMarkers) {
          this.mapMarkers[i].show();
        }
      } else {
        if (this.summary.third.isSelect) {
          this.thirdLayer.show();
        } else {
          this.thirdLayer.hide();
        }

        //this.markers = []
        let markers = {};
        for (const key in this.summary) {
          if (key !== "third" && this.summary[key].isSelect) {
            markers[key] = this.countryPowers[key];
          }
        }
        for (let i in this.mapMarkers) {
          this.mapMarkers[i].hide();
        }
        if (markers.dest) {
          //this.markers = [...this.markers, ...markers.dest]
          for (let i in this.cacheMarks.dest) {
            this.cacheMarks.dest[i].show();
          }
        }
        if (markers.npc) {
          //this.markers = [...this.markers, ...markers.npc]
          for (let i in this.cacheMarks.npc) {
            this.cacheMarks.npc[i].show();
          }
        }
        if (markers.swap) {
          //this.markers = [...this.markers, ...markers.swap]
          for (let i in this.cacheMarks.swap) {
            this.cacheMarks.swap[i].show();
          }
        }
      }
      //this.showMarkers()
    },

    maxZoomHandler() {
      if (this.currentZoom < this.maxZoom) {
        this.currentZoom++;
        this.distributeMap.setZoom(this.currentZoom);
      }
    },

    minZoomHandler() {
      if (this.currentZoom > this.minZoom) {
        this.currentZoom--;
        this.distributeMap.setZoom(this.currentZoom);
      }
    },

    zoomChangedHandler() {
      this.currentZoom = this.distributeMap.getZoom();
      if (this.currentZoom === this.minZoom) {
        this.distributeMap.setCenter(this.center);
      }
      if (
        this.currentZoom >= this.minZoom &&
        this.currentZoom <= this.maxZoom
      ) {
        this.showMarkers();
      }
    },
  },
};
</script>

<style scoped>
.wrap {
  height: 100%;
  width: 100vw;
  position: relative;
}
#distribute-map {
  height: 100%;
  width: 100vw;
}
.foot {
  position: absolute;
  left: 0;
  bottom: 0.3rem;
  width: calc(100vw - 0.3rem);
  z-index: 2000;
  box-sizing: border-box;
  border-radius: 0.1rem;
  user-select: none;
}
.search-warp {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  color: #040b29;
  font-size: 0.16rem;
  font-weight: 500;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
.btn-group {
  display: flex;
  align-items: center;
}
.filter-btn {
  height: 0.4rem;
  padding: 0 0.12rem;
  border: 0.01rem solid #fff;
  margin-left: 0.15rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  color: #040b29;
  font-size: 0.14rem;
  cursor: pointer;
  box-sizing: border-box;
  white-space: nowrap;
  background: #fff;
  box-shadow: 0.05rem 0.05rem 0.1rem rgba(54, 61, 84, 0.04);
  border-radius: 0.1rem;
}
.filter-btn img {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.05rem;
}
.filter-btn .showText {
  color: rgba(4, 11, 41, 1);
  padding-left: 0.04rem;
  font-weight: bolder;
}
.active-btn {
  border: 0.02rem solid #00bebe;
}
</style>
