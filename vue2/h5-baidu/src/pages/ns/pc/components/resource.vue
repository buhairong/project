<template>
  <div class="wrap">
    <div id="resource-map" ref="resource"></div>
    <div class="foot">
      <div class="search-warp">
        <div class="search-btn-wrap" @click="showPoiSearchHandler">
          <img
            src="https://cdn-app..com/pe/ns/search.svg"
            class="search-icon"
          />
          搜索
        </div>
        <div class="btn-group">
          <div class="city-search-btn" @click="showCitySearchHandler">
            <input
              class="currentCity"
              type="text"
              v-model="currentCity.name"
              disabled
            />
            <img
              src="https://cdn-app..com/PE/2021/11/11/0d547883-1ec2-40f4-8cda-57b5727eb9b8.svg"
              class="arrow"
            />
          </div>
          <div
            class="filter-btn"
            :class="{ 'active-btn': item.isSelect }"
            v-for="item in summary"
            :key="item.id"
            @click="filterBtnClickHandler(item.id)"
          >
            {{ item.title }} {{ item.showText }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="poi-warp"
      v-show="showPoiSearch"
      :style="searchPoiSearch ? poiStyle : ''"
    >
      <div class="header">
        <div class="title">搜索地点</div>
        <div class="close-btn" @click="closeSearchDialog">
          <img
            src="https://cdn-app..com/PE/2021/11/11/c44ae7f8-3102-4f6e-be91-08d6c60b036c.svg"
          />
        </div>
      </div>
      <div class="poi-search-wrap">
        <input
          type="text"
          placeholder="搜索地点或地址"
          v-model.trim="poiSearchText"
          @input="onPoiSearchDebounce"
        />
        <img
          class="clear-poi-seach"
          src="https://cdn-app..com/PE/2021/11/12/95373408-d5be-4734-bb90-b7df1883b234.svg"
          @click="poiSearchText = ''"
        />
      </div>
      <div class="split-line"></div>
      <div class="cotent-wrap">
        <div class="loading-wrap" v-show="loadingPois">
          <div class="loading-circle circle1"></div>
          <div class="loading-circle circle2"></div>
        </div>
        <div class="empty" v-show="poiErrorMsg">
          <div class=".img" v-html="emptySvg"></div>
          <div class="err-msg">{{ poiErrorMsg }}</div>
        </div>
        <div class="pois" v-show="pois.length">
          <div
            v-for="poi in pois"
            :key="poi.id"
            class="poi-item"
            @click="poiItemClickHandler(poi)"
          >
            <div class="poi-icon">
              <img
                src="https://cdn-app..com/PE/2021/11/12/14140e6a-4184-4247-8599-3b99f3f858f8.svg"
              />
            </div>
            <div class="poi-info">
              <div class="poi-name" v-html="poi.name"></div>
              <div class="poi-address" v-html="poi.address"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="city-search-warp" v-show="showCitySearch">
      <div class="header">
        <div class="title">切换城市</div>
        <div class="close-btn" @click="closeSearchDialog">
          <img
            src="https://cdn-app..com/PE/2021/11/11/c44ae7f8-3102-4f6e-be91-08d6c60b036c.svg"
          />
        </div>
      </div>
      <div class="tabs">
        <div
          class="tab province"
          :class="{ active: activeSelTab === 'province' }"
          @click="selTabHandler('province')"
        >
          <div class="province-name" v-if="selProvince">{{ selProvince }}</div>
          <div class="placeholder" v-else>请选择</div>
        </div>
        <div class="sel-province-arrow" v-show="cityList.length">
          <img
            src="https://cdn-app..com/PE/2021/11/15/0bbf7c98-3fe4-468a-9bdd-437abb5b833f.svg"
          />
        </div>
        <div
          class="tab city"
          :class="{ active: activeSelTab === 'city' }"
          @click="selTabHandler('city')"
          v-show="showSelCityTab"
        >
          <div class="city-name" v-if="selCity">{{ selCity }}</div>
          <div class="placeholder" v-else>请选择</div>
        </div>
      </div>
      <div class="content-wrap">
        <div class="province-wrap" v-show="activeSelTab === 'province'">
          <div
            class="province-item"
            :class="{
              'touch-province': selProvince === province.name,
              'sel-province-city': selProvinceCity === province.name,
            }"
            v-for="province in provinceList"
            :key="province.simple"
            @click="provinceClickHandler(province)"
          >
            {{ province.name }}
          </div>
        </div>
        <div class="city-wrap" v-show="activeSelTab === 'city'">
          <div
            class="city-item"
            v-for="city in cityList"
            :key="city.simple"
            @click="cityClickHandler(city)"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
    <control
      :controlStyle="controlStyle"
      tab="resource"
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
import { getDistanceByZoom } from "@/map";
import Control from "./control.vue";
import { getCityInfoByName, CITY_LIST } from "@/city/index";
import { getSummary, getAround, getPoiSuggest } from "@/api/ns";
import { formatAround, debounce, baiduConfig } from "@/utils/util";
import { mapState } from "vuex";
import { emptySvg } from "@/utils/svg";
import ResPanel from "./ResPanel";
import PubSub from "pubsub-js";

export default {
  components: { Control, ResPanel },

  // props: ['showMyLocation', 'config'],

  data() {
    return {
      showMyLocation: true,
      curPosition: {},
      curCenter: null,
      map: null,
      summary: {
        swap: {
          id: "swap",
          title: "站",
          isSelect: false,
          showText: "",
        },
        npc: {
          id: "npc",
          title: "超充站",
          isSelect: false,
          showText: "",
        },
        dest: {
          id: "dest",
          title: "目的地充电站",
          isSelect: false,
          showText: "",
        },
        third: {
          id: "third",
          title: "三方充电桩",
          isSelect: false,
          showText: "",
        },
      },
      controlStyle: {
        borderRadius: "0.1rem",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      },
      poiStyle: {
        bottom: "0.86rem",
      },
      distance: 8000,
      myZoom: 14,
      cityZoom: 11,
      currentZoom: 14,
      minZoom: 4,
      maxZoom: 16,
      countryZoom: 7,
      listener: null,
      currentCity: {
        name: "",
        code: "",
      },
      powers: null,
      markerArr: [],
      rangeArr: [],
      poiSearchText: "",
      pois: [],
      loadingPois: false,
      poiErrorMsg: "",
      emptySvg,
      showPoiSearch: false,
      showCitySearch: false,
      changeCurCityCenter: false,
      selProvince: "",
      selCity: "",
      activeSelTab: "province",
      showSelCityTab: false,
      provinceList: CITY_LIST,
      cityList: [],
      selProvinceCity: "",
      myMarker: null,
      detailMarker: null,
      selected: null,
      showResource: false,
      res: {},
      resPanel: {
        left: true,
        right: false,
      },
      mapOffet: [0, 0],
      searchPoiSearch: false,
      setMarkerTimer: null,
      markerListeners: [],
      selectUrl: "",
      markerSize: {
        small: { width: 12, height: 12 },
        middle: { width: 24, height: 24 },
        large: { width: 37, height: 37 },
      },
    };
  },

  watch: {
    showMyLocation: async function (showMyLocation) {
      if (showMyLocation) {
        await this.init();
        if (this.map) {
          this.currentZoom = this.myZoom;
          this.map.zoomTo(this.myZoom);
        } else {
          this.initMap();
        }
        this.setMyMarker();
        this.showSelCityTab = false;
        this.cityList = [];
        this.selProvince = "";
        this.selCity = "";
        this.selProvinceCity = "";
        this.activeSelTab = "province";
        this.$emit("clearMylocationFlag");
      }
    },
  },

  computed: {
    ...mapState(["countrySummary", "countryPowers"]),
  },

  async mounted() {
    // for(const item of this.config) {
    //   if (item.key === 'default_power_around_distance') {
    //     try {
    //       this.distance = item.value / 1000
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    // }
    PubSub.subscribe("locationMyPosition", () => {
      this.showMyLocation = true;
    });
    this.initMap();
    await this.init();
    this.$emit("clearMylocationFlag");
  },

  methods: {
    async init() {
      await this.getMyLocation();
      this.getCenter();
      this.setMyMarker();
      this.getSummary();
      this.getAround();
    },

    getMyLocation() {
      return new Promise((res) => {
        const geolocation = new window.BMap.Geolocation();
        geolocation.getCurrentPosition((r) => {
          this.curPosition.city = r.address.city;
          this.curPosition.lat = r.latitude;
          this.curPosition.lng = r.longitude;
          res(true);
        });
      });
    },

    getCenter() {
      const position = {};
      const info = getCityInfoByName(this.curPosition.city);
      this.currentCity.name = this.curPosition.city;
      this.currentCity.code = info.code;
      if (this.showMyLocation || this.changeCurCityCenter) {
        position.lat = this.curPosition.lat;
        position.lng = this.curPosition.lng;
        this.currentZoom = this.myZoom;
      } else {
        position.lat = info.loc[0];
        position.lng = info.loc[1];
      }
      this.curPosition.lat = position.lat;
      this.curPosition.lng = position.lng;
      this.curCenter = new window.BMap.Point(position.lng, position.lat);
      if (this.map) {
        this.map.centerAndZoom(this.curCenter, this.currentZoom);
      }

      this.showMyLocation = false;
      this.changeCurCityCenter = false;
    },

    initMap() {
      this.map = new window.BMap.Map("resource-map", {
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
      });
      this.map.setMapStyle({
        styleJson: baiduConfig,
      });
    },

    dragHandler() {
      const mo = this.getMapMovingOffset();
      const x = Math.abs(mo[0] - this.mapOffet[0]);
      const y = Math.abs(mo[1] - this.mapOffet[1]);
      if (x > 500 || y > 500) {
        this.mapOffet = mo;
        if (this.currentZoom > this.countryZoom) {
          this.drapMap();
        }
      } else {
        if (this.showResource) {
          const offset = this.getMapMovingOffset();
          this.$refs.resPanel.move(offset[0], offset[1]);
        }
      }
    },

    drapMap() {
      const center = this.map.getCenter();
      this.curPosition.lat = center.lat;
      this.curPosition.lng = center.lng;
      this.getAround();
    },

    removeLogo() {
      this.$nextTick(() => {
        const logos = document.querySelectorAll(".csssprite");
        const tabs = document.querySelectorAll(".smnoprint");
        for (const logo of logos) {
          logo.remove();
        }

        for (const tab of tabs) {
          tab.remove();
        }
      });
    },

    zoomChangedHandler() {
      if (this.showResource) {
        this.closePanel();
      }
      this.currentZoom = this.map.getZoom();
      const center = this.map.getCenter();
      this.curPosition.lat = center.lat;
      this.curPosition.lng = center.lng;
      if (this.currentZoom >= this.countryZoom) {
        this.getSummary();
        this.getAround();
      }
    },

    maxZoomHandler() {
      if (this.currentZoom < this.maxZoom) {
        this.currentZoom++;
        this.map.zoomTo(this.currentZoom);
      }
    },

    minZoomHandler() {
      if (this.currentZoom > this.minZoom) {
        this.currentZoom--;
        this.map.zoomTo(this.currentZoom);
      }
    },

    filterBtnClickHandler(btn) {
      this.summary[btn].isSelect = !this.summary[btn].isSelect;
      this.getMarkers();
    },

    getSummary() {
      if (this.currentZoom <= this.countryZoom) {
        this.currentCity.name = "全国";
        this.summary.swap.showText = this.countrySummary.swapShowText;
        this.summary.npc.showText = this.countrySummary.npcShowText;
        this.summary.dest.showText = this.countrySummary.destShowText;
        this.summary.third.showText = this.countrySummary.thirdShowText;
        return;
      } else {
        this.currentCity.name = this.curPosition.city;
      }
      getSummary(
        this,
        (summary) => {
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
            this.summary.third.showText = `${summary.third_connector_number}座`;
          }
        },
        {
          city_code: this.currentCity.code,
        }
      );
    },

    getAround() {
      let params = {};
      if (this.currentZoom > this.countryZoom) {
        const dis = getDistanceByZoom(this.currentZoom, this.distance);
        const distance = dis * 1000;
        params = {
          with_national_model: false,
          latitude: this.curPosition.lat,
          longitude: this.curPosition.lng,
          distance,
        };
      } else {
        params = {
          with_national_model: true,
        };
      }

      getAround(
        this,
        (result) => {
          this.powers = formatAround(result.powers);
          if (this.setMarkerTimer) {
            clearTimeout(this.setMarkerTimer);
            this.setMarkerTimer = null;
          }
          this.setMarkerTimer = setTimeout(() => {
            this.getMarkers();
          }, 500);
        },
        params
      );
    },

    getMarkers() {
      const keys = Object.keys(this.summary);
      const selAll =
        keys.every((item) => this.summary[item].isSelect) ||
        keys.every((item) => !this.summary[item].isSelect);
      let markers = [];
      if (selAll) {
        markers = [
          ...this.powers.swap,
          ...this.powers.npc,
          ...this.powers.dest,
          ...this.powers.third,
        ];
      } else {
        for (const key in this.summary) {
          if (this.summary[key].isSelect) {
            markers = [...markers, ...this.powers[key]];
          }
        }
      }
      for (const marker of this.markerArr) {
        marker.setMap(null);
      }

      for (const range of this.rangeArr) {
        range.setMap(null);
      }

      for (const listener of this.markerListeners) {
        window.qq.maps.event.removeListener(listener);
      }
      this.markerArr = [];
      this.rangeArr = [];

      let markerSize = {};
      if (this.currentZoom >= 8) {
        markerSize = this.markerSize.large;
      } else if (this.currentZoom >= 6) {
        markerSize = this.markerSize.middle;
      } else {
        markerSize = this.markerSize.small;
      }

      for (const marker of markers) {
        this.showMarkers(marker, markerSize.width, markerSize.height);
      }
    },

    showMarkers(markerPoint, sizeW = 16, sizeH = 17, isBig = false) {
      let isRange = false;
      let icon = "https://cdn-app..com/pe/ns/swap.svg";
      let size = new window.BMap.Size(sizeW, sizeH);
      let zIndex = 10;
      const position = markerPoint.location.split(",");
      if (isBig) {
        zIndex = 16;
        if (markerPoint.type === "PowerSwap") {
          icon = "https://cdn-app..com/ns/ns/swapafter.svg";
        } else if (
          markerPoint.type === "ChargeStation" &&
          markerPoint.charge_station_type === "ChargeStationNpc"
        ) {
          icon = "https://cdn-app..com/pe/ns/otherpinafter.svg";
        } else if (
          markerPoint.type === "ChargeStation" &&
          markerPoint.charge_station_type === "ChargeStationDest"
        ) {
          icon = "https://cdn-app..com/pe/ns/otherpinafter.svg";
        } else if (
          markerPoint.type === "ChargeStation" &&
          markerPoint.charge_station_type === "ThirdChargeStation"
        ) {
          icon = "https://cdn-app..com/pe/ns/otherpinafter.svg";
        }
      } else {
        if (markerPoint.type === "PowerSwap") {
          icon = "https://cdn-app..com/pe/ns/swappin.svg";
          if (markerPoint.construction !== "11") {
            isRange = true;
          }
          zIndex = 15;
        } else if (
          markerPoint.type === "ChargeStation" &&
          markerPoint.charge_station_type === "ChargeStationNpc"
        ) {
          icon = "https://cdn-app..com/pe/ns/otherpin.svg";
          zIndex = 14;
        } else if (
          markerPoint.type === "ChargeStation" &&
          markerPoint.charge_station_type === "ChargeStationDest"
        ) {
          icon = "https://cdn-app..com/pe/ns/otherpin.svg";
          zIndex = 13;
        } else if (
          markerPoint.type === "ChargeStation" &&
          markerPoint.charge_station_type === "ThirdChargeStation"
        ) {
          icon = "https://cdn-app..com/pe/ns/otherpin.svg";
          zIndex = 12;
        } else if (markerPoint.type === "Merged") {
          icon = "https://cdn-app..com/pe/ns/otherpin.svg";
          zIndex = 11;
        }
      }

      console.log(isRange, zIndex, icon);

      const myIcon = new window.BMap.Icon(
        "https://cdn-app..com/pe/ns/smallswap.svg",
        size
      );
      //const myIcon = new window.BMap.Icon(icon, size)
      const point = new window.BMap.Point(position[0], position[1]);
      const marker = new window.BMap.Marker(point, { icon: myIcon });
      //this.map.addOverlay(marker)

      return marker;
    },

    checkCanOpenOnRight(start, offset) {
      const windowWidth = document.body.clientWidth;
      if (windowWidth - start - offset > 364) {
        return true;
      } else {
        return false;
      }
    },

    getProperty(html, prop, from) {
      let i1 = html.indexOf(prop + ":", from);
      let i2 = html.indexOf("px", i1);
      return parseFloat(html.substring(i1 + 1 + prop.length, i2).trim());
    },

    openResource(left, top) {
      const offset = this.getMapMovingOffset();
      const canRight = this.checkCanOpenOnRight(left + 90, offset[0]);
      if (canRight) {
        this.$refs.resPanel.setLocation(
          left + 65,
          top - 50,
          offset[0],
          offset[1]
        );
        this.resPanel.left = true;
        this.resPanel.right = false;
      } else {
        this.$refs.resPanel.setLocation(
          left - 364 - 75,
          top - 50,
          offset[0],
          offset[1]
        );
        this.resPanel.left = false;
        this.resPanel.right = true;
      }
      this.showResource = true;
    },

    getMapMovingOffset() {
      const style =
        this.$refs.resource.children[0].children[0].children[0].style;
      let transfrom = style.transform;
      if (transfrom.startsWith("translate3d")) {
        let i1 = transfrom.indexOf("(");
        let i2 = transfrom.indexOf(")");
        let x = transfrom.substring(i1 + 1, i2).split(",");
        let left = x[0].trim();
        let top = x[1].trim();
        const leftOffset = parseFloat(left.substring(0, left.length - 2));
        const topOffset = parseFloat(top.substring(0, top.length - 2));
        return [leftOffset, topOffset];
      } else {
        const leftOffset = parseFloat(
          style.left.substring(0, style.left.length - 2)
        );
        const topOffset = parseFloat(
          style.top.substring(0, style.top.length - 2)
        );
        return [leftOffset, topOffset];
      }
    },

    selectedToSmall() {
      const url = this.selectUrl;
      const anchorb = new window.qq.maps.Point(34 / 2, 37 / 2);
      const size = new window.qq.maps.Size(34, 37);
      this.selected.setIcon(
        new window.qq.maps.MarkerImage(url, size, null, anchorb, size)
      );
    },

    closePanel() {
      this.showResource = false;
      this.selectedToSmall();
      this.selected = null;
    },

    setMyMarker() {
      if (this.myMarker) {
        this.map.removeOverlay(this.myMarker);
      }

      const size = new window.BMap.Size(16, 16);
      const myIcon = new window.BMap.Icon(
        "https://cdn-app..com/PE/2021/11/16/f59dd903-0e92-4b54-8e8e-e274644ce41e.svg",
        size
      );
      const point = new window.BMap.Point(
        this.curPosition.lng,
        this.curPosition.lat
      );
      this.myMarker = new window.BMap.Marker(point, { icon: myIcon });
      this.map.addOverlay(this.myMarker);
    },

    onPoiSearchDebounce: debounce("onPoiSearch"),

    onPoiSearch() {
      if (!this.poiSearchText) {
        return;
      }
      this.searchPoiSearch = true;
      this.poiErrorMsg = "";
      this.pois = [];
      this.loadingPois = true;
      let params = {
        city: this.currentCity.code,
        keywords: this.poiSearchText,
      };

      getPoiSuggest(
        this,
        (result) => {
          const pois = result.pois;
          if (pois && pois.length) {
            this.pois = result.pois.map((item) => {
              const re = new RegExp(this.poiSearchText, "g");
              item.name = item.name.replace(
                re,
                `<span style="color:#040B29;">${this.poiSearchText}</span>`
              );
              item.address = item.address.replace(
                re,
                `<span style="color:#040B29;">${this.poiSearchText}</span>`
              );
              return item;
            });
          } else {
            this.poiErrorMsg = "No Result";
          }

          this.loadingPois = false;
        },
        params
      );
    },

    showPoiSearchHandler() {
      this.showCitySearch = false;
      this.showPoiSearch = true;
    },

    showCitySearchHandler() {
      this.showCitySearch = true;
      this.showPoiSearch = false;
    },

    closeSearchDialog() {
      this.showCitySearch = false;
      this.showPoiSearch = false;
    },

    poiItemClickHandler(poi) {
      const curCity = { ...this.currentCity };
      this.curPosition = poi;
      this.changeCurCityCenter = true;
      this.getCenter();
      this.getAround();
      if (poi.city !== curCity.name) {
        this.getSummary();
      }
      this.map.zoomTo(this.myZoom);
    },

    selTabHandler(tab) {
      if (this.activeSelTab !== tab) {
        this.activeSelTab = tab;
      }
    },

    provinceClickHandler(province) {
      this.showSelCityTab = false;
      this.cityList = [];
      this.selProvince = province.name;
      if (province.cities) {
        this.cityList = province.cities;
        this.showSelCityTab = true;
        this.activeSelTab = "city";
      } else {
        this.selProvinceCity = province.name;
        this.chooseCityHandler(province);
      }
    },

    cityClickHandler(city) {
      this.selCity = city.name;
      this.selProvinceCity = this.selProvince;
      this.chooseCityHandler(city);
    },

    chooseCityHandler(city) {
      this.curPosition.city = city.name;
      this.getCenter();
      this.map.zoomTo(this.cityZoom);
      this.closeSearchDialog();
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
#resource-map {
  height: 100%;
  width: 100vw;
}
.foot {
  position: absolute;
  left: 0;
  bottom: 0.3rem;
  width: 100%;
  height: 0.56rem;
  display: flex;
  justify-content: center;
  z-index: 2000;
  box-sizing: border-box;
}
.search-warp {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.search-btn-wrap {
  height: 100%;
  width: 1.32rem;
  font-size: 0.14rem;
  border-radius: 0.1rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 0.17rem;
  color: #cdced4;
}
.search-icon {
  width: 0.28rem;
  height: 0.28rem;
  padding-right: 0.12rem;
}
.btn-group {
  height: 100%;
  border-radius: 0.1rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-left: 0.08rem;
  padding-right: 0.2rem;
}
.city-search-btn {
  padding-left: 0.15rem;
  display: flex;
  align-items: center;
}
.city-search-btn .currentCity {
  color: #040b29;
  font-size: 0.14rem;
  font-weight: 500;
  width: 0.8rem;
  border: none;
  background-color: #fff;
}
.city-search-btn .arrow {
  width: 0.16rem;
  height: 0.16rem;
}
.filter-btn {
  height: 0.4rem;
  padding: 0 0.12rem;
  border: 0.01rem solid #cdced4;
  margin-left: 0.15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #040b29;
  font-size: 0.14rem;
  cursor: pointer;
}
.active-btn {
  border-color: #040b29;
  border-width: 0.015rem;
}
.poi-warp,
.city-search-warp {
  width: 3.2rem;
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 0.1rem;
  position: absolute;
  top: 0.36rem;
  left: 0.15rem;
  z-index: 2000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.city-search-warp {
  bottom: 0.86rem;
}

.poi-warp .header,
.city-search-warp .header {
  height: 0.28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
}
.poi-warp .header .title,
.city-search-warp .header .title {
  color: #040b29;
  font-size: 0.18rem;
  font-weight: 500;
}
.close-btn img {
  width: 0.21rem;
  height: 0.21rem;
}
.poi-search-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.poi-search-wrap input {
  flex: 1;
  border: none;
  color: #040b29;
  font-size: 0.16rem;
  outline: none;
  caret-color: #00bcbc;
  padding-right: 0.1rem;
}
.poi-search-wrap input::-webkit-input-placeholder {
  color: #696d7f;
}
.poi-search-wrap .clear-poi-seach {
  width: 0.16rem;
  height: 0.16rem;
}
.poi-warp .split-line {
  width: 100%;
  height: 0.01rem;
  background-color: #696d7f;
  margin-top: 0.15rem;
}
.poi-warp .cotent-wrap {
  flex: 1;
  overflow: auto;
}
.poi-warp .loading-wrap {
  padding: 0.46rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.poi-warp .loading-circle {
  width: 0.08rem;
  height: 0.08rem;
  border-radius: 50%;
  margin-right: 0.1rem;
}
.poi-warp .circle1 {
  background-color: #05c6cb;
  animation: circle1-loading 0.5s infinite linear;
}
.poi-warp .circle2 {
  background-color: #02e0e6;
  animation: circle2-loading 0.5s infinite linear;
}
@keyframes circle1-loading {
  0% {
    background-color: #05c6cb;
  }
  100% {
    background-color: #02e0e6;
  }
}
@keyframes circle2-loading {
  0% {
    background-color: #02e0e6;
  }
  100% {
    background-color: #05c6cb;
  }
}
.empty {
  width: 100%;
}
.empty .img {
  width: 100%;
}
.empty .err-msg {
  color: #9b9da9;
  font-size: 0.16rem;
  text-align: center;
}
.poi-item {
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.poi-info {
  flex: 1;
  padding-left: 0.1rem;
}
.poi-name {
  color: #696d7f;
  font-size: 0.16rem;
  line-height: 0.19rem;
}
.poi-address {
  color: #696d7f;
  font-size: 0.14rem;
  line-height: 0.17rem;
  padding-top: 0.15rem;
}
.city-search-warp .tabs {
  height: 0.4rem;
  display: flex;
  align-items: center;
  color: #040b29;
  font-size: 0.14rem;
  border-bottom: 0.01rem solid #ebebee;
}
.sel-province-arrow {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.05rem;
}
.sel-province-arrow img {
  width: 100%;
  height: 100%;
}
.city-search-warp .tabs .placeholder {
  color: #696d7f;
}
.city-search-warp .tabs .tab {
  height: 100%;
  display: flex;
  align-items: center;
}
.city-search-warp .tabs .active {
  border-bottom: 0.01rem solid #00bebe;
}
.content-wrap {
  padding-top: 0.25rem;
  flex: 1;
  overflow: auto;
}
.content-wrap .province-item,
.content-wrap .city-item {
  height: 0.4rem;
  display: flex;
  align-items: center;
  font-size: 0.14rem;
  color: #040b29;
}
.touch-province {
  background: #f7f7f8;
}
.content-wrap .province-wrap .sel-province-city {
  color: #00bebe;
  background: #fff;
}
</style>
<style>
.together {
  color: #5cc9d1;
  font-size: 0.12rem;
  width: 0.28rem;
  height: 0.28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.02rem solid #00bebe;
  border-radius: 50%;
  background-color: #fff;
}
.range {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
