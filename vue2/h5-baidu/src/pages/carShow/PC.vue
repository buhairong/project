<template>
  <div id="wrapper-pc">
    <div id="container-pc" ref="map"></div>
    <div class="nav-pc">
      <div @click="pos" class="nav-block">
        <img
          class="-invisible -internal"
          src="images/pos.png"
          width="24px"
          height="24px"
        />
      </div>
    </div>
    <Panel :panel="panel" ref="panel" :is-pc="true" />
    <transition name="trans-search">
      <SearchPanel
        v-show="search"
        :current-city="selectedCity"
        :is-pc="true"
        ref="searchPanel"
        :city="config.hotCities"
        :code="selectedCityCode"
      />
    </transition>
    <ResPanel
      v-show="showResource"
      :data="res"
      ref="resPanel"
      :panel="resPanel"
      :is-pc="true"
    />
    <Car />
  </div>
</template>

<script>
import {
  addImgMarker,
  addMapEvent,
  CLUSTER_SIZE,
  CLUSTER_SIZE_LARGE,
  getDistanceByZoom,
  initMap,
  MARKER__SIZE,
  MARKER_SIZE,
  MARKER_SIZE_LARGE,
} from "@/map";
import Panel from "@/components/Panel";
import PubSub from "pubsub-js";
import SearchPanel from "@/components/SearchPanel";
import { getCityInfo } from "@/city";
import {
  getPowerDetail,
  getCitySummary,
  getPowerAround,
  getPoiSummary,
} from "@/api";
import ResPanel from "@/components/ResPanel";
import { changeDistance, loadConfig, loadMyLocation } from "@/common";
import Car from "@/components/Car";

export default {
  name: "PC",
  components: { Car, ResPanel, SearchPanel, Panel },
  data() {
    return {
      search: false,
      map: {},
      selected: null,
      showDistance: false,
      distancePre: 5,
      collapseBeforeDetail: true,
      panel: {
        loading: true,
        distancePre: 5,
        showCollapse: false,
        showSearch: true,
        showDistance: true,
        showDistancePanel: false,
        showClose: false,
        collapsed: false,
        title: "",
        data: {
          swap: "0",
          Npc: ["0", "0"],
          Dest: ["0", "0"],
          third: "0",
        },
        distance: 5,
      },
      res: {
        type: 0,
        title: null,
        tag: null,
        address: null,
        dc: 0,
        ac: 0,
      },
      showPoster: false,
      showResource: false,
      selectedCity: "",
      selectedCityCode: "",
      currentPoi: {
        center: {},
        title: "",
        data: {
          swap: "0",
          Npc: ["0", "0"],
          Dest: ["0", "0"],
          third: "0",
        },
      },
      config: {
        defaultZoom: 14,
        cityZoom: 11,
        hotCities: [],
        posterImg: "",
        distance: 5,
      },
      poiMarker: null,
      resMarker: [],
      resCache: {},
      staticCache: {},
      clusterCache: {},
      resPanel: {
        left: true,
        right: false,
      },
      selectPos: null,
      mapOffet: [0, 0],
      currentZoom: 14,
    };
  },
  mounted() {
    loadConfig(this);
    loadMyLocation(this);
    const _this = this;
    PubSub.subscribe("showSearchPanel", function () {
      _this.search = true;
    });
    PubSub.subscribe("hideSearch", function () {
      _this.search = false;
    });
    PubSub.subscribe("changeDistance", function (msg, distance) {
      changeDistance(_this, distance);
    });
    PubSub.subscribe("selectCity", function (msg, simple) {
      let cityInfo = getCityInfo(simple);
      _this.selectedCity = cityInfo.name;
      _this.selectedCityCode = cityInfo.code;
      let zoom = _this.config.cityZoom;
      if (_this.selectedCityCode == "000000") {
        _this.selectedCityCode = "110100";
        zoom = 5;
      }
      let cityCenter = cityInfo.loc;
      _this.selectPoi(cityCenter[0], cityCenter[1], zoom, simple, false, false);
      _this.panel.loading = true;
      getCitySummary(_this, cityInfo.code, function (data) {
        _this.panel.data = data;
        _this.panel.loading = false;
      });
    });
    PubSub.subscribe("selectPoi", function (msg, poi) {
      _this.selectPos = poi;
      _this.selectPoi(
        poi.lat,
        poi.lng,
        _this.config.defaultZoom,
        poi.name,
        true,
        true
      );
    });
    PubSub.subscribe("selectRes", function (msg, res) {
      _this.search = false;
      _this.map.panTo(new window.qq.maps.LatLng(res.lat, res.lng));
      _this.map.zoomTo(16);
      // _this.clearPower()
      getPowerAround(
        res.lat,
        res.lng,
        getDistanceByZoom(_this.map.zoom),
        _this,
        function (r) {
          // _this.clearPower()
          _this.loadPower(r);
          let selectId = res.id;
          let cache = _this.resCache;
          if (res.resType == "SwapClone") {
            selectId += "-1";
            cache = _this.staticCache;
          } else if (res.resType == "PowerSwap") {
            cache = _this.staticCache;
          }
          let m = cache[selectId];

          m.setMap(null);
          const p = m.getPosition();
          let type = m.resType;
          _this.selected = _this.addRes(type, p.lat, p.lng, m.id, true);
          _this.resPanel.loading = true;

          let _id = m.id;
          if (m.resType == 5) {
            _id = _id.substr(0, _id.length - 2);
          }
          getPowerDetail(_this, _id, m.resType, function (detail) {
            _this.res = detail;
            _this.resPanel.loading = false;
            // setTimeout(_this.moveNav, 100)
          });

          _this.panel.loading = true;
          _this.panel.title = res.name;
          _this.panel.showClose = true;
          _this.panel.showSearch = false;
          _this.selectPos = { lat: res.lat, lng: res.lng };
          getPoiSummary(
            _this,
            res.lat,
            res.lng,
            _this.config.distance,
            function (data) {
              _this.panel.data = data;
              _this.$refs.panel.setPanelHeight();
              _this.panel.loading = false;
              _this.selectedResId = m.id;
              _this.selectedResType = m.resType;
            }
          );
          setTimeout(() => {
            let imgUrl = "images/power/" + m.resType + "s.png?id=" + m.id;
            const div =
              _this.$refs.map.children[0].children[0].children[0].children[2].children[2].querySelector(
                'img[src="' + imgUrl + '"]'
              ).parentNode;
            let html = div.outerHTML;
            const left = _this.getProperty(html, "left", 0);
            const top = _this.getProperty(html, "top", 0);
            _this.openResource(left + 30, top + 55, type, _id);
          }, 150);
        }
      );
    });
    PubSub.subscribe("closePanel", function () {
      _this.selectedResId = null;
      if (_this.showResource) {
        _this.closeResource();
      } else {
        if (_this.poiMarker) {
          _this.poiMarker.setMap(null);
        }
      }
      _this.panel.title = _this.currentPoi.title;
      _this.panel.data = _this.currentPoi.data;
      _this.panel.showSearch = true;
      _this.panel.showDistance = true;
      _this.panel.showClose = false;
      _this.panel.distance = _this.config.distance;
      _this.panel.distancePre = _this.config.distance;
      _this.$refs.panel.setPanelHeight();
      // _this.$refs.panel.setPanelHeight()
      _this.selectPos = _this.currentPoi.center;
    });
    window.onresize = () => {
      this.$refs.searchPanel.setHeight();
      if (this.showResource) {
        const offset = this.getMapMovingOffset();
        this.$refs.resPanel.move(offset[0], offset[1]);
      }
    };
  },
  methods: {
    setMapData() {
      this.map = initMap(
        "container-pc",
        this.currentPoi.center,
        this.config.defaultZoom
      );
      addImgMarker(this.map, "center", this.currentPoi.center, 1);
      addMapEvent(this.map, "click", () => {
        console.log("map click");
        this.selectedResId = null;
        if (this.showResource) {
          this.closeResource();
        }
        if (this.poiMarker) {
          this.poiMarker.setMap(null);
        }
        if (this.poiMarker) {
          this.poiMarker.setMap(null);
        }
        this.panel.title = this.currentPoi.title;
        this.panel.data = this.currentPoi.data;
        this.panel.showSearch = true;
        this.panel.showDistance = true;
        this.panel.showClose = false;
        this.panel.distance = this.config.distance;
        this.panel.distancePre = this.config.distance;
        this.$refs.panel.setPanelHeight();
        this.selectPos = this.currentPoi.center;
      });
      addMapEvent(this.map, "drag", () => {
        if (this.showResource) {
          // this.closeResource()
          const offset = this.getMapMovingOffset();
          this.$refs.resPanel.move(offset[0], offset[1]);
        }
        const mo = this.getMapMovingOffset();
        const x = Math.abs(mo[0] - this.mapOffet[0]);
        const y = Math.abs(mo[1] - this.mapOffet[1]);
        if (x > 500 || y > 500) {
          this.mapOffet = mo;
          const _this = this;
          getPowerAround(
            this.map.center.lat,
            this.map.center.lng,
            getDistanceByZoom(this.map.zoom),
            this,
            function (r) {
              let needClearRes = false;
              let needClearCluster = false;
              for (let i in r) {
                if (r[i].type == 6) {
                  needClearRes = true;
                  break;
                }
              }
              for (let i in r) {
                if (r[i].type == 2 || r[i].type == 3 || r[i].type == 4) {
                  needClearCluster = true;
                  break;
                }
              }
              if (needClearRes) {
                _this.clearPower();
              }
              if (needClearCluster) {
                _this.clearCluster();
              }
              _this.loadPower(r);
            }
          );
        }
      });
      addMapEvent(this.map, "zoom_changed", () => {
        const expanded = this.currentZoom < this.map.zoom;
        console.log("zoom changed:", this.currentZoom, this.map.zoom);
        this.currentZoom = this.map.zoom;
        if (this.showResource) {
          this.closeResource();
        }
        const _this = this;
        // this.clearPower()
        let dis = getDistanceByZoom(this.map.zoom);
        if (dis < this.panel.distance) {
          dis = this.panel.distance;
        }
        getPowerAround(
          this.map.center.lat,
          this.map.center.lng,
          dis,
          this,
          function (r) {
            _this.clearCluster();
            if (!expanded) {
              let needClearRes = false;
              for (let i in r) {
                if (r[i].type == 6) {
                  needClearRes = true;
                  break;
                }
              }
              if (needClearRes) {
                _this.clearPower();
              }
            }
            _this.loadPower(r);

            console.log(_this.selectedResId);
            if (_this.selectedResId) {
              let selectId = _this.selectedResId;
              let cache = _this.resCache;
              if (_this.selectedResType == 5) {
                cache = _this.staticCache;
              } else if (_this.selectedResType == 1) {
                cache = _this.staticCache;
              }
              let m = cache[selectId];
              if (m) {
                m.setMap(null);
                const p = m.getPosition();
                let type = m.resType;
                _this.selected = _this.addRes(type, p.lat, p.lng, m.id, true);

                setTimeout(() => {
                  let imgUrl =
                    "images/power/" +
                    _this.selectedResType +
                    "s.png?id=" +
                    _this.selectedResId;
                  const div =
                    _this.$refs.map.children[0].children[0].children[0].children[2].children[2].querySelector(
                      'img[src="' + imgUrl + '"]'
                    ).parentNode;
                  let html = div.outerHTML;
                  const left = _this.getProperty(html, "left", 0);
                  const top = _this.getProperty(html, "top", 0);
                  _this.openResource(
                    left + 30,
                    top + 55,
                    _this.selectedResType,
                    _this.selectedResId
                  );
                }, 150);
              }
            }
          }
        );
      });
    },
    pos() {
      this.map.panTo(this.currentPoi.center);
      if (this.map.zoom != this.config.defaultZoom) {
        this.map.zoomTo(this.config.defaultZoom);
      }
    },
    addPoi(lat, lng) {
      if (this.poiMarker) {
        this.poiMarker.setMap(null);
      }
      this.poiMarker = addImgMarker(
        this.map,
        "poi",
        new window.qq.maps.LatLng(lat, lng),
        2
      );
    },
    addRes(type, lat, lng, id, large) {
      if (type == "6") {
        let _key = lat + "-" + lng;
        if (!this.clusterCache[_key]) {
          let className = "cluster ";
          let size = null;
          if (id > 9999) {
            className += "cluster-large";
            size = CLUSTER_SIZE_LARGE;
          } else {
            className += "cluster-normal";
            size = CLUSTER_SIZE;
          }
          let content = '<div class="' + className + '">' + id + "</div>";
          let decoration = new window.qq.maps.MarkerDecoration(content);
          let marker = new window.qq.maps.Marker({
            position: new window.qq.maps.LatLng(lat, lng),
            map: this.map,
            decoration: decoration,
            icon: new window.qq.maps.MarkerImage(
              "images/power/6.png",
              size,
              null,
              null,
              size
            ),
            zIndex: 11,
          });
          window.qq.maps.event.addListener(marker, "click", (e) => {
            const m = e.target;
            const p = m.getPosition();
            this.map.panTo(new window.qq.maps.LatLng(p.lat, p.lng));
            this.map.zoomBy(1);
          });
          this.clusterCache[_key] = marker;
          return marker;
        }
      } else {
        let cache = this.resCache;
        if (type == 1 || type == 5) {
          cache = this.staticCache;
        }
        if (large || !cache[id]) {
          let zIndex = 8;
          let iconUrl = type;
          if (large) {
            iconUrl += "s";
            zIndex = 20;
          } else {
            if (type == 1) {
              zIndex = 10;
            } else if (type == 5) {
              zIndex = 9;
            } else if (type == 2) {
              zIndex = 8;
            } else if (type == 3) {
              zIndex = 7;
            } else if (type == 4) {
              zIndex = 6;
            }
          }
          let size = null;
          if (large) {
            size = MARKER_SIZE_LARGE;
          } else {
            if (type == 4) {
              size = MARKER_SIZE;
            } else {
              size = MARKER__SIZE;
            }
          }
          let icon = new window.qq.maps.MarkerImage(
            "images/power/" + iconUrl + ".png?id=" + id,
            size,
            null,
            null,
            size
          );
          let marker = new window.qq.maps.Marker({
            position: new window.qq.maps.LatLng(lat, lng),
            map: this.map,
            icon: icon,
            zIndex: zIndex,
          });
          if (id) {
            marker.id = id;
            marker.resType = type;
          }
          window.qq.maps.event.addListener(marker, "click", (e) => {
            console.log("marker click");
            e.event.stopPropagation();
            if (this.selected) {
              if (e.target.id == this.selected.id) {
                return;
              }
              this.selectedToSmall();
            }
            const m = e.target;
            let html = m.viewModel.iconRender.container.innerHTML;
            const oldUrl = m.viewModel.iconRender.image.url;
            const to = html.indexOf(oldUrl);
            html = html.substring(0, to);
            const from = html.lastIndexOf("<div");
            let left = this.getProperty(html, "left", from);
            let top = this.getProperty(html, "top", from);
            if (m.resType != 4) {
              left += 10;
              top += 19;
            }

            let id = m.id;
            const p = m.getPosition();
            let type = m.resType;
            m.setMap(null);
            this.selected = this.addRes(type, p.lat, p.lng, id, true);

            const _this = this;
            this.resPanel.loading = true;
            _this.openResource(left, top, type, id);
            if (m.resType == 5) {
              id = m.id.substr(0, m.id.length - 2);
            }
            getPowerDetail(_this, id, m.resType, function (detail) {
              _this.res = detail;
              _this.resPanel.loading = false;
            });
          });
          cache[id] = marker;
          return marker;
        }
      }
    },
    checkCanOpenOnRight(start, offset) {
      const windowWidth = document.body.clientWidth;
      if (windowWidth - start - offset > 345) {
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
    openResource(left, top, type, id) {
      let sensors = window["sensorsDataAnalytic201505"];
      if (sensors) {
        sensors.track("ChargingMapH5PinClick", { resourcesid: id });
      }
      let typeOffsetY = -5;
      let typeOffsetX = 0;
      const offset = this.getMapMovingOffset();
      let panelLeft = left - typeOffsetX + 90;
      const canRight = this.checkCanOpenOnRight(panelLeft, offset[0]);
      if (canRight) {
        this.$refs.resPanel.setLocation(
          panelLeft,
          top - typeOffsetY - 10,
          offset[0],
          offset[1]
        );
        this.resPanel.left = true;
        this.resPanel.right = false;
      } else {
        panelLeft = panelLeft - 345 - 138;
        this.$refs.resPanel.setLocation(
          panelLeft,
          top - typeOffsetY - 10,
          offset[0],
          offset[1]
        );
        this.resPanel.left = false;
        this.resPanel.right = true;
      }
      this.showResource = true;
    },
    getMapMovingOffset() {
      const style = this.$refs.map.children[0].children[0].children[0].style;
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
    closeResource() {
      this.showResource = false;
      this.selectedToSmall();
      this.selected = null;
    },
    selectedToSmall() {
      let url = this.selected.icon.url;
      url = url.replace("s.png", ".png");
      let size = MARKER__SIZE;
      if (this.selected.resType == 4) {
        size = MARKER_SIZE;
      }
      this.selected.setIcon(
        new window.qq.maps.MarkerImage(url, size, null, null, size)
      );
    },
    clearPower() {
      // 清楚非cluster，非station
      for (let k in this.resCache) {
        let o = this.resCache[k];
        o.setMap(null);
      }
      this.resCache = {};
    },
    clearStatic() {
      for (let k in this.staticCache) {
        let o = this.staticCache[k];
        o.setMap(null);
      }
      this.staticCache = {};
    },
    clearCluster() {
      for (let k in this.clusterCache) {
        let o = this.clusterCache[k];
        o.setMap(null);
      }
      this.clusterCache = {};
    },
    loadPower(r) {
      for (let i in r) {
        this.addRes(r[i].type, r[i].lat, r[i].lng, r[i].id);
      }
    },
    selectPoi(lat, lng, zoom, name, showDistance, summary) {
      this.panel.loading = true;
      this.search = false;
      this.map.panTo(new window.qq.maps.LatLng(lat, lng));
      this.map.zoomTo(zoom);
      this.addPoi(lat, lng);
      this.panel.title = name;
      //this.loadPower(lat, lng)
      this.panel.showSearch = false;
      this.panel.showDistance = showDistance;
      this.panel.showClose = true;
      this.panel.distance = this.config.distance;
      this.panel.distancePre = this.config.distance;
      // this.$refs.panel.setPanelHeight()
      const _this = this;
      if (summary) {
        getPoiSummary(this, lat, lng, this.panel.distance, function (data) {
          _this.panel.data = data;
          _this.$refs.panel.setPanelHeight();
          _this.panel.loading = false;
        });
      }
    },
  },
};
</script>

<style scoped>
#wrapper-pc {
  height: 100%;
  width: 100%;
}

#container-pc {
  height: 100%;
  width: 100%;
}

.nav-pc {
  position: fixed;
  bottom: 15px;
  right: 15px;
}

.nav-pc .nav-block {
  width: 46px;
  height: 46px;
  position: relative;
  background: white;
  margin-top: 15px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.nav-pc img {
  position: absolute;
  top: 11px;
  left: 11px;
}

#container-pc > div > div:nth-child(2) {
  display: none;
}

#container-pc > div > div:nth-child(3) {
  display: none;
}

#container-pc > div > div:nth-child(4) {
  display: none;
}

#container-pc > div > div:nth-child(5) {
  display: none;
}

.cluster {
  font-weight: 400;
  background-image: linear-gradient(0deg, #ffffff 4%, #96c1e5 100%);
  /*box-shadow: 0px 0px 10px 20px rgba(0, 0, 0, 0.1);*/
  text-align: center;
  font-size: 14px;
  color: #000f16;
}

.cluster-normal {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
}

.cluster-large {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  line-height: 50px;
}
</style>
