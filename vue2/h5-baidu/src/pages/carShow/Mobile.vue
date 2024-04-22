<template>
  <div style="height: 100%; width: 100%">
    <div id="wrapper" :class="{blur:blur}">
      <div id="container" ref="map">
      </div>
      <div id="nav" ref="nav">
        <div @click="pos" class="nav-block">
          <img class="nio-invisible nio-internal" src="images/pos.png" width="24px" height="24px">
        </div>
        <div @click="openPoster" class="nav-block">
          <img class="nio-invisible nio-internal" src="images/share.png" width="24px" height="24px">
        </div>
      </div>
      <Panel :panel="panel" ref="panel"/>
      <transition name="trans-res">
        <ResPanel v-show="showResource" :data="res" ref="resPanel" :panel="resPanel"/>
      </transition>
      <transition name="trans-search">
        <SearchPanel v-show="search" :current-city="selectedCity" :city="config.hotCities" :code="selectedCityCode"/>
      </transition>
      <Car/>
    </div>
    <Poster v-show="showPoster" :panel="panel" ref="poster" :poster-img="config.posterImg" :city="selectedCitySimple"
            :position="selectPos"/>
  </div>
</template>

<script>
import SearchPanel from "@/components/SearchPanel";
import {getCitySummary, getPoiSummary, getPowerAround, getPowerDetail} from '@/api'
import PubSub from 'pubsub-js'
import {getCityInfo} from '@/city'
import ResPanel from "@/components/ResPanel";
import Panel from "@/components/Panel";
import Poster from "@/components/Poster";
import {
  initMap,
  addImgMarker,
  addMapEvent,
  getDistanceByZoom,
  MARKER_SIZE,
  MARKER_SIZE_LARGE,
  CLUSTER_SIZE_LARGE, CLUSTER_SIZE, MARKER_NIO_SIZE
} from '@/map'
import {changeDistance, loadConfig, loadMyLocation} from '@/common'
import Car from "@/components/Car";

export default {
  components: {Car, Poster, Panel, ResPanel, SearchPanel},
  data() {
    return {
      search: false,
      map: {},
      selected: null,
      collapseBeforeDetail: true,
      resPanel: {
        loading: false,
        left: false,
        right: false
      },
      panel: {
        loading: true,
        distancePre: 5,
        showCollapse: true,
        showSearch: true,
        showDistance: true,
        showDistancePanel: false,
        showClose: false,
        collapsed: false,
        title: '',
        data: {
          swap: '0',
          nioNpc: ['0', '0'],
          nioDest: ['0', '0'],
          third: '0',
        },
        distance: 5,
      },
      res: {
        type: 0,
        title: null,
        tag: null,
        address: null,
        dc: 0,
        ac: 0
      },
      showPoster: false,
      showResource: false,
      selectedCity: '',
      selectedCityCode: '',
      selectedCitySimple: '',
      currentPoi: {
        center: {},
        title: '',
        data: {
          swap: '0',
          nioNpc: ['0', '0'],
          nioDest: ['0', '0'],
          third: '',
        },
      },
      config: {
        defaultZoom: 14,
        cityZoom: 11,
        hotCities: [],
        posterImg: '',
        distance: 5,
      },
      poiMarker: null,
      resMarker: [],
      selectPos: null,
      blur: false,
      mapOffet: [0, 0],
      resCache: {},
      staticCache: {},
      clusterCache: {},
      currentZoom: 14,
    }
  },
  methods: {
    setMapData: function () {
      this.map = initMap('container', this.currentPoi.center, this.config.defaultZoom)
      addImgMarker(this.map, 'center', this.currentPoi.center, 1)
      addMapEvent(this.map, 'click', () => {
        console.log('click map')
        if (this.showResource) {
          this.closeResource()
        } else {
          if (!this.panel.collapsed) {
            this.collapse()
          }
        }
        if (this.poiMarker) {
          this.poiMarker.setMap(null)
        }
        this.panel.title = this.currentPoi.title
        this.panel.data = this.currentPoi.data
        this.panel.showSearch = true
        this.panel.showDistance = true
        this.panel.showClose = false
        this.panel.distance = this.config.distance
        this.panel.distancePre = this.config.distance
        this.panel.collapsed = this.collapseBeforeDetail
        this.$refs.panel.setPanelHeight()
        this.selectPos = this.currentPoi.center
      })
      addMapEvent(this.map, 'drag', () => {
        if (!this.showResource && !this.panel.collapsed) {
          this.collapse()
        }
        const mo = this.getMapMovingOffset()
        const x = Math.abs(mo[0] - this.mapOffet[0])
        const y = Math.abs(mo[1] - this.mapOffet[1])
        if (x > 500 || y > 500) {
          this.mapOffet = mo
          const _this = this
          // this.clearPower()
          getPowerAround(this.map.center.lat, this.map.center.lng, getDistanceByZoom(this.map.zoom), this, function (r) {
            // _this.clearPower()
            let needClearRes = false
            let needClearCluster = false
            for (let i in r) {
              if (r[i].type == 6) {
                needClearRes = true
                break
              }
            }
            for (let i in r) {
              if (r[i].type == 2 || r[i].type == 3 || r[i].type == 4) {
                needClearCluster = true
                break
              }
            }
            if (needClearRes) {
              _this.clearPower()
            }
            if (needClearCluster) {
              _this.clearCluster()
            }
            _this.loadPower(r)
          })
        }
      })
      addMapEvent(this.map, 'zoom_changed', () => {
        const expanded = this.currentZoom < this.map.zoom
        console.log('zoom changed', this.map.zoom)
        if (this.showResource) {
          this.closeResource()
        }
        const _this = this
        // this.clearPower()
        let dis = getDistanceByZoom(this.map.zoom)
        if (dis < this.panel.distance) {
          dis = this.panel.distance
        }
        getPowerAround(this.map.center.lat, this.map.center.lng, dis, this, function (r) {
          _this.clearCluster()
          if (!expanded) {
            let needClearRes = false
            for (let i in r) {
              if (r[i].type == 6) {
                needClearRes = true
                break
              }
            }
            if (needClearRes) {
              _this.clearPower()
            }
          }
          // _this.clearPower()
          _this.loadPower(r)
        })
      })
    },
    getMapMovingOffset() {
      const style = this.$refs.map.children[0].children[0].children[0].style
      let transfrom = style.transform
      if (transfrom.startsWith('translate3d')) {
        let i1 = transfrom.indexOf('(')
        let i2 = transfrom.indexOf(')')
        let x = transfrom.substring(i1 + 1, i2).split(',')
        let left = x[0].trim()
        let top = x[1].trim()
        const leftOffset = parseFloat(left.substring(0, left.length - 2))
        const topOffset = parseFloat(top.substring(0, top.length - 2))
        return [leftOffset, topOffset]
      } else {
        const leftOffset = parseFloat(style.left.substring(0, style.left.length - 2))
        const topOffset = parseFloat(style.top.substring(0, style.top.length - 2))
        return [leftOffset, topOffset]
      }
    },
    clearPower() { // 清楚非cluster，非station
      for (let k in this.resCache) {
        let o = this.resCache[k]
        o.setMap(null)
      }
      this.resCache = {}
    },
    clearStatic() {
      for (let k in this.staticCache) {
        let o = this.staticCache[k]
        o.setMap(null)
      }
      this.staticCache = {}
    },
    clearCluster() {
      for (let k in this.clusterCache) {
        let o = this.clusterCache[k]
        o.setMap(null)
      }
      this.clusterCache = {}
    },
    loadPower(r) {
      for (let i in r) {
        this.addRes(r[i].type, r[i].lat, r[i].lng, r[i].id)
      }
    },
    addRes(type, lat, lng, id, large) {
      if (type == '6') {
        let _key = lat + '-' + lng
        if (!this.clusterCache[_key]) {
          let className = 'cluster '
          let size = null
          if (id > 9999) {
            className += 'cluster-large'
            size = CLUSTER_SIZE_LARGE
          } else {
            className += 'cluster-normal'
            size = CLUSTER_SIZE
          }
          let content = '<div class="' + className + '">' + id + '</div>';
          let decoration = new window.qq.maps.MarkerDecoration(content);
          let marker = new window.qq.maps.Marker({
            position: new window.qq.maps.LatLng(lat, lng),
            map: this.map,
            decoration: decoration,
            icon: new window.qq.maps.MarkerImage('images/power/6.png', size, null, null, size),
            zIndex: 11,
          });
          window.qq.maps.event.addListener(marker, 'click', (e) => {
            const m = e.target
            const p = m.getPosition()
            this.map.panTo(new window.qq.maps.LatLng(p.lat, p.lng))
            this.map.zoomBy(1)
          })
          this.clusterCache[_key] = marker
          // this.resMarker.push(marker)
          return marker
        }
      } else {
        let cache = this.resCache
        if (type == 1 || type == 5) {
          cache = this.staticCache
        }
        if (large || !cache[id]) {
          let zIndex = 8
          let iconUrl = type
          if (large) {
            iconUrl += 's'
            zIndex = 20
          } else {
            if (type == 1) {
              zIndex = 10
            } else if (type == 5) {
              zIndex = 9
            } else if (type == 2) {
              zIndex = 8
            } else if (type == 3) {
              zIndex = 7
            } else if (type == 4) {
              zIndex = 6
            }
          }
          let size = null
          if (large) {
            size = MARKER_SIZE_LARGE
          } else {
            if(type == 4) {
              size = MARKER_SIZE
            } else {
              size = MARKER_NIO_SIZE
            }
          }
          let icon = new window.qq.maps.MarkerImage('images/power/' + iconUrl + '.png', size, null, null, size)
          let marker = new window.qq.maps.Marker({
            position: new window.qq.maps.LatLng(lat, lng),
            map: this.map,
            icon: icon,
            zIndex: zIndex,
          });
          if (id) {
            marker.id = id
            marker.resType = type
          }
          window.qq.maps.event.addListener(marker, 'click', (e) => {
            e.event.stopPropagation()
            if (this.selected) {
              this.selectedToSmall()
            }
            const m = e.target
            m.setMap(null)
            const p = m.getPosition()
            this.selected = this.addRes(m.resType, p.lat, p.lng, m.id, true)
            const _this = this
            _this.collapseBeforeDetail = _this.panel.collapsed
            if (!_this.panel.collapsed) {
              _this.collapse()
            }
            this.resPanel.loading = true
            _this.openResource(m.id)
            _this.moveNav()
            let id = m.id
            if (m.resType == 5) {
              id = m.id.substr(0, m.id.length - 2)
            }
            getPowerDetail(this, id, m.resType, function (detail) {
              _this.res = detail
              _this.resPanel.loading = false
              setTimeout(_this.moveNav, 100)
            })
          })
          cache[id] = marker
          // this.resMarker.push(marker)
          return marker
        }
      }
    },
    addPoi(lat, lng) {
      if (this.poiMarker) {
        this.poiMarker.setMap(null)
      }
      this.poiMarker = addImgMarker(this.map, 'poi', new window.qq.maps.LatLng(lat, lng), 2)
    },
    collapse() {
      this.panel.collapsed = true
      this.$refs.panel.setPanelHeight()
    },
    expand() {
      this.panel.collapsed = false
      this.$refs.panel.setPanelHeight()
    },
    pos() {
      this.collapse()
      this.map.panTo(this.currentPoi.center)
      if (this.map.zoom != this.config.defaultZoom) {
        this.map.zoomTo(this.config.defaultZoom)
      }
    },
    selectedToSmall() {
      let url = this.selected.icon.url
      url = url.replace('s.png', '.png')
      let size = MARKER_NIO_SIZE
      if (this.selected.resType == 4) {
        size = MARKER_SIZE
      }
      this.selected.setIcon(new window.qq.maps.MarkerImage(url, size, null, null, size))
    },
    moveNav() {
      if (this.showResource) {
        let h = this.$refs.resPanel.getHeight()
        this.$refs.nav.style.bottom = h + 40 + 'px'
      } else {
        let h = this.$refs.panel.calPanelHeight()
        this.$refs.nav.style.bottom = h + 80 + 'px'
      }
    },
    openResource(id) {
      let sensors = window['sensorsDataAnalytic201505'];
      if (sensors) {
        sensors.track('ChargingMapH5PinClick', {resourcesid: id});
      }
      this.showResource = true
    },
    closeResource() {
      this.showResource = false
      this.selectedToSmall()
      this.selected = null
      if (!this.collapseBeforeDetail) {
        this.expand()
      }
      setTimeout(this.moveNav, 100)
    },
    openPoster() {
      let sensors = window['sensorsDataAnalytic201505'];
      if (sensors) {
        sensors.track('ChargingMapH5Share', {});
      }
      this.blur = true
      this.showPoster = true
      this.$refs.poster.createImg()
    },
    selectPoi(lat, lng, zoom, name, showDistance, summary) {
      this.panel.loading = true
      this.search = false
      this.map.panTo(new window.qq.maps.LatLng(lat, lng))
      this.map.zoomTo(zoom)
      this.addPoi(lat, lng)
      this.panel.title = name
      this.panel.collapsed = false
      this.panel.showSearch = false
      this.panel.showDistance = showDistance
      this.panel.showClose = true
      this.panel.distance = this.config.distance
      this.panel.distancePre = this.config.distance
      this.$refs.panel.setPanelHeight()
      const _this = this
      if (summary) {
        getPoiSummary(this, lat, lng, this.panel.distance, function (data) {
          _this.panel.data = data
          _this.panel.loading = false
        })
      }
    }
  },
  mounted() {
    loadConfig(this)
    loadMyLocation(this)
    const _this = this
    PubSub.subscribe('selectPoi', function (msg, poi) {
      _this.selectPos = poi
      _this.selectPoi(poi.lat, poi.lng, _this.config.defaultZoom, poi.name, true, true)
    })
    PubSub.subscribe('selectRes', function (msg, res) {
      _this.collapseBeforeDetail = _this.panel.collapsed
      _this.search = false
      _this.map.panTo(new window.qq.maps.LatLng(res.lat, res.lng))
      _this.map.zoomTo(16)
      // _this.loadPower(res.lat, res.lng, res.id)
      // _this.clearPower()
      getPowerAround(res.lat, res.lng, getDistanceByZoom(_this.map.zoom), _this, function (r) {
        // _this.clearPower()
        _this.loadPower(r)
        let m = null
        let selectId = res.id
        let cache = _this.resCache
        if (res.resType == 'SwapClone') {
          selectId += '-1'
          cache = _this.staticCache
        } else if (res.resType == 'PowerSwap') {
          cache = _this.staticCache
        }
        m = cache[selectId]
        m.setMap(null)
        const p = m.getPosition()
        let type = m.resType
        _this.selected = _this.addRes(type, p.lat, p.lng, m.id, true)
        _this.resPanel.loading = true
        if (!_this.panel.collapsed) {
          _this.collapse()
        }
        let _id = m.id
        if (m.resType == 5) {
          _id = _id.substr(0, _id.length - 2)
        }
        getPowerDetail(_this, _id, m.resType, function (detail) {
          _this.res = detail
          _this.resPanel.loading = false
          setTimeout(_this.moveNav, 100)
        })
        _this.openResource(_id)
      })
    })
    PubSub.subscribe('selectCity', function (msg, simple) {
      let cityInfo = getCityInfo(simple)
      _this.selectedCity = cityInfo.name
      _this.selectedCityCode = cityInfo.code
      let zoom = _this.config.cityZoom
      if (_this.selectedCityCode == '000000') {
        _this.selectedCityCode = '110100'
        zoom = 5
      }
      _this.selectedCitySimple = simple
      let cityCenter = cityInfo.loc
      _this.panel.collapsed = false
      _this.selectPoi(cityCenter[0], cityCenter[1], zoom, simple, false, false)
      _this.panel.loading = true
      getCitySummary(_this, cityInfo.code, function (data) {
        _this.panel.data = data
        _this.panel.loading = false
      })
    })
    PubSub.subscribe('hideSearch', function () {
      _this.search = false
    })
    PubSub.subscribe('changeDistance', function (msg, distance) {
      changeDistance(_this, distance)
    })
    PubSub.subscribe('showSearchPanel', function () {
      _this.search = true
    })
    PubSub.subscribe('closePanel', function () {
      if (_this.showResource) {
        _this.closeResource()
      } else {
        if (_this.poiMarker) {
          _this.poiMarker.setMap(null)
        }
        _this.panel.title = _this.currentPoi.title
        _this.panel.data = _this.currentPoi.data
        _this.panel.showSearch = true
        _this.panel.showDistance = true
        _this.panel.showClose = false
        _this.panel.distance = _this.config.distance
        _this.panel.distancePre = _this.config.distance
        _this.panel.collapsed = _this.collapseBeforeDetail
        _this.$refs.panel.setPanelHeight()
        _this.selectPos = _this.currentPoi.center
      }
    })
    PubSub.subscribe('blur', function () {
      _this.blur = true
    })
    PubSub.subscribe('moveNav', function () {
      _this.moveNav()
    })
    PubSub.subscribe('hidePoster', function () {
      _this.blur = false
      _this.showPoster = false
    })
  },
}
</script>

<style>
.cluster {
  font-weight: 400;
  background-image: linear-gradient(0deg, #FFFFFF 4%, #96C1E5 100%);
  /*box-shadow: 0px 0px 10px 20px rgba(0, 0, 0, 0.1);*/
  text-align: center;
  font-size: 14px;
  color: #000F16;
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

.trans-search-enter-active {
  animation: trans-search 0.3s;
}

.trans-search-leave-active {
  animation: trans-search 0.3s reverse;
}

@keyframes trans-search {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.trans-res-enter-active {
  animation: trans-res 0.3s;
}

.trans-res-leave-active {
  animation: trans-res 0.3s reverse;
}

@keyframes trans-res {
  0% {
    transform: translateY(400px);
  }
  100% {
    transform: translateY(0);
  }
}

#wrapper {
  height: 100%;
  overflow: hidden;
}

.blur {
  filter: blur(30px);
}

#container {
  height: calc(100% + 325px);
  width: calc(100% + 400px);
  margin-top: -325px;
  margin-left: -200px;
}

#nav {
  position: fixed;
  right: 8px;
  bottom: 365px;
  width: 54px;
  transition: all 0.3s ease 0s;
  padding-bottom: 10px;
}


#nav .nav-block {
  width: 46px;
  height: 46px;
  position: relative;
  background: white;
  margin-top: 15px;
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

#nav img {
  position: absolute;
  top: 11px;
  left: 11px;
}

.description {
  font-size: 14px;
}

.marker {
  position: relative;
  height: 17px;
}

.marker div {
  position: absolute;
  font-size: 12px;
  color: #9B9DA9;
  font-weight: 400;
}

.marker div:last-child {
  right: 0;
}

#container > div > div:nth-child(2) {
  display: none;
}

#container > div > div:nth-child(3) {
  display: none;
}

#container > div > div:nth-child(4) {
  display: none;
}

#container > div > div:nth-child(5) {
  display: none;
}
</style>
