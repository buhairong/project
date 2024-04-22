<template>
  <div class="wrap">
    <div id="distribute-map" ref="distribute"></div>
    <div class="foot">
      <div class="search-warp">
        <div class="btn-group">
          <div 
            class="filter-btn"
            :class="{'active-btn': item.isSelect}"
            v-for="item in summary"
            :key="item.id"
            @click="filterBtnClickHandler(item.id)"
          >
            <img :src="item.icon" >
            <div>{{item.title}} </div>
            <div class="showText"> {{item.showText}} </div>
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
import { getSummary, getAround } from '@/api/ns'
import Control from './control.vue'
import { formatAround } from '@/utils/util'
import ResPanel from "./ResPanel"

export default {
  components: { Control, ResPanel },
  props: ['config'],
  data() {
    return {
      distributeMap: null,
      thirdLayer: '',
      summary: {
        swap: {
          id: 'swap',
          title: '换电站',
          isSelect: false,
          icon: 'https://cdn-app.nio.com/pe/ns/swapbtn.svg',
          showText: ''
        },
        npc: {
          id: 'npc',
          title: '超充站',
          isSelect: false,
          icon: 'https://cdn-app.nio.com/pe/ns/superchargebtn.svg',
          showText: ''
        },
        dest: {
          id: 'dest',
          title: '目的地充电站',
          isSelect: false,
          icon: 'https://cdn-app.nio.com/pe/ns/destbtn.svg',
          showText: ''
        },
        third: {
          id: 'third',
          title: '接入第三方充电桩',
          isSelect: false,
          icon: 'https://cdn-app.nio.com/pe/ns/thirdbtn.svg',
          showText: ''
        },
      },
      controlStyle: {
        borderRadius: '0.1rem',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '0.01rem solid #fff'
      },
      countryPowers: null,
      markers: [],
      marker: null,
      tmpRes: {},
      maxZoom: 7,
      minZoom: 4.5,
      currentZoom: 4.5,
      center: new window.TMap.LatLng(37.000963, 105.058074),
      markerSize: {
        small: {width: 12, height: 12}, //level 4
        middle: {width: 24, height: 24}, // level 5-6
        large: {width: 32, height: 32}, // level 7
      },
      showResource: false,
      res: {},
      resPanel: {
        left: true,
        right: false,
      },
      mapOffet: {x: 0, y: 0},
      touchStart: {x: 0, y: 0},
      diff: {x: 0, y: 0},
      selectId: null,
    }
  },

  mounted() {
    this.init()
    this.getSummary()
    this.getAround()
  },

  methods: {
    init() {
      try {
        let imageSW = new window.TMap.LatLng(-3, 50)
        let imageNE = new window.TMap.LatLng(60, 165)
        let imageLatLngBounds = new window.TMap.LatLngBounds(imageSW, imageNE)
        this.distributeMap = new window.TMap.Map(document.getElementById("distribute-map"), {
          minZoom: this.minZoom,
          maxZoom: this.maxZoom,
          zoom: this.currentZoom,
          center: this.center,
          showControl: false,
          scale: 1.3,
          boundary: imageLatLngBounds,
          viewMode: '2D',
          doubleClickZoom: false,
          baseMap: {
            type: 'vector',
            features: []
          }
        })
        
        imageSW = new window.TMap.LatLng(-3, 50)
        imageNE = new window.TMap.LatLng(70, 165)
        imageLatLngBounds = new window.TMap.LatLngBounds(imageSW, imageNE)

        // 底部蓝色大背景
        new window.TMap.ImageGroundLayer({
          zIndex: 1,
          bounds: imageLatLngBounds,
          src: 'https://cdn-app.nio.com/PE/2021/11/5/4aea249d-ae6a-4400-9a6c-3ee6be681b30.svg',
          map: this.distributeMap,
        })

        imageSW = new window.TMap.LatLng(19.024126, 72.985651)
        imageNE = new window.TMap.LatLng(56.845794, 135.180584)
        imageLatLngBounds = new window.TMap.LatLngBounds(imageSW, imageNE)

        // 白色蜂窝图
        new window.TMap.ImageGroundLayer({
          zIndex: 3,
          bounds: imageLatLngBounds,
          src: 'https://cdn-app.nio.com/pe/ns/whitebg.svg',
          map: this.distributeMap,
          viewMode: '2D',
        })

        for(const item of this.config) {
          if (item.key === 'h5_national_model_third_cs_image_url') {
            // 三方热力图
            this.thirdLayer = new window.TMap.ImageGroundLayer({
              zIndex: 4,
              bounds: imageLatLngBounds,
              src: item.value,
              map: this.distributeMap,
              viewMode: '2D',
            })
          } else if (item.key === 'h5_national_model_route_image_url') {
            // 高速路线图
            new window.TMap.ImageGroundLayer({
              zIndex: 5,
              bounds: imageLatLngBounds,
              src: item.value,
              map: this.distributeMap,
              viewMode: '2D',
            })
          }
        }
        
        this.removeLogo()

        this.distributeMap.on('click', () => {
          if (this.selectId) {
            this.closePanel()
          }
        })

        this.distributeMap.on('zoom_changed', () => {
          this.zoomChangedHandler()
        })

        this.distributeMap.on('dragstart', (e) => {
          if (e.originalEvent.changedTouches) {
            this.touchStart.x = e.originalEvent.changedTouches[0].clientX
            this.touchStart.y = e.originalEvent.changedTouches[0].clientY
          }
        })

        this.distributeMap.on('drag', (e) => {
          if (e.originalEvent.changedTouches) {
            this.diff.x = e.originalEvent.changedTouches[0].clientX - this.touchStart.x
            this.diff.y = e.originalEvent.changedTouches[0].clientY - this.touchStart.y
            this.dragHandler()
            this.touchStart.x = e.originalEvent.changedTouches[0].clientX
            this.touchStart.y = e.originalEvent.changedTouches[0].clientY
          } else {
            this.diff.x = e.originalEvent.movementX
            this.diff.y = e.originalEvent.movementY
            this.dragHandler()
          }
        })

        this.distributeMap.on('dragend', (e) => {
          if (e.originalEvent.changedTouches) {
            this.diff.x = e.originalEvent.changedTouches[0].clientX - this.touchStart.x
            this.diff.y = e.originalEvent.changedTouches[0].clientY - this.touchStart.y
          } else {
            this.diff.x = e.originalEvent.movementX
            this.diff.y = e.originalEvent.movementY
          }
          
          this.dragHandler()
          this.touchStart = {x: 0, y: 0}
        })
      } catch (error) {
        console.log('error', error)
      }
    },

    removeLogo() {
      const map = this.$refs.distribute
      const logText = map.querySelector('.logo-text')
      const imgs = map.querySelectorAll('a')
      logText.innerHTML = ''
      for(const item of imgs) {
        const attrs = item.attributes
        for(const attr of attrs) {
          if (attr.value === 'http://map.qq.com?ref=jsapi_v3') {
            item.remove()
            return
          }
        }
      }
    },

    dragHandler() {
      if (this.showResource) {
        this.$refs.resPanel.left += this.diff.x
        this.$refs.resPanel.top += this.diff.y
      }
    },

    showMarkers() {
      if (this.marker) {
        this.marker.setMap(null)
      }

      let markerSize = {}
      /*
      const currentZoom = Math.floor(this.currentZoom)
      if (currentZoom === this.minZoom) {
        markerSize = this.markerSize.small
      } else if (currentZoom > this.minZoom && currentZoom < 6) {
        markerSize = this.markerSize.middle
      } else if (currentZoom >= 6) {
        markerSize = this.markerSize.large
      }*/

      let w = Math.floor((this.currentZoom - 4)/3 * 20) + 12
      markerSize = {width:w,height:w}
      console.log(markerSize.width,markerSize.height)

      const geometries = this.markers.map(item => {
        const location = item.location.split(',')
        let styleId = ''
        if (item.type === 'PowerSwap') {
          styleId = 'swap'
        } else if (item.type === 'ChargeStation' && item.charge_station_type === 'NioChargeStationNpc') {
          styleId = 'npc'
        } else if (item.type === 'ChargeStation' && item.charge_station_type === 'NioChargeStationDest') {
          styleId = 'dest'
        }
        return {
          id: item.id,
          styleId,
          position: new window.TMap.LatLng(location[1], location[0]),
          properties: {
            title: styleId
          },
        }
      })
      this.marker = new window.TMap.MultiMarker({
        id: 'marker-layer-distribute',
        map: this.distributeMap,
        styles: {
          swap: new window.TMap.MarkerStyle({
            width: markerSize.width,
            height: markerSize.height,
            anchor: {x: markerSize.width/2, y: markerSize.height},
            zIndex: 15,
            src: 'https://cdn-app.nio.com/pe/ns/swappin.svg'
          }),
          swapScan: new window.TMap.MarkerStyle({
            width: 72,
            height: 72,
            anchor: {x: 36, y: 72},
            zIndex: 16,
            src: 'https://cdn-app.nio.com/pe/ns/swappinafter.svg'
          }),
          npc: new window.TMap.MarkerStyle({
            width: markerSize.width,
            height: markerSize.height,
            anchor: {x: markerSize.width/2, y: markerSize.height},
            zIndex: 14,
            src: 'https://cdn-app.nio.com/pe/ns/npcpin.svg'
          }),
          npcScan: new window.TMap.MarkerStyle({
            width: 72,
            height: 72,
            anchor: {x: 36, y: 72},
            zIndex: 16,
            src: 'https://cdn-app.nio.com/pe/ns/npcpinafter.svg'
          }),
          dest: new window.TMap.MarkerStyle({
            width: markerSize.width,
            height: markerSize.height,
            anchor: {x: markerSize.width/2, y: markerSize.height},
            zIndex: 16,
            src: 'https://cdn-app.nio.com/pe/ns/destpin.svg'
          }),
          destScan: new window.TMap.MarkerStyle({
            width: 72,
            height: 72,
            anchor: {x: 36, y: 72},
            zIndex: 16,
            src: 'https://cdn-app.nio.com/pe/ns/destpinafter.svg'
          }),
        },
        geometries
      })

      this.marker.on('click', (e) => {
        if (this.selectId) {
          this.selectId = null
        }
        if (e.geometry) {
          this.res = this.markers.find(item => item.id === e.geometry.id)
          this.selectId = e.geometry.id
          this.tmpRes = e.geometry
          this.marker.remove(this.selectId)
          this.showBigMarkers()
          this.openResource(e.point.x, e.point.y)
          const sensors = window['sensorsDataAnalytic201505']
          if (sensors) {
            sensors.track('nions_chargingmaph5_resourcespin_click', {
              resourcetype: this.res.type
            })
          }
        }
      })
    },

    showBigMarkers() {
      const location = this.res.location.split(',')
      let styleId = ''
      if (this.res.type === 'PowerSwap') {
        styleId = 'swapScan'
      } else if (this.res.type === 'ChargeStation' && this.res.charge_station_type === 'NioChargeStationNpc') {
        styleId = 'npcScan'
      } else if (this.res.type === 'ChargeStation' && this.res.charge_station_type === 'NioChargeStationDest') {
        styleId = 'destScan'
      }
      const geometries = [{
        id: this.res.id + 'scan',
        styleId,
        position: new window.TMap.LatLng(location[1], location[0]),
        properties: {
          title: styleId
        },
      }]

      this.marker.add(geometries)
    },

    openResource(left, top) {
      const canRight = this.checkCanOpenOnRight(left + 90, 0)
      if (canRight) {
        this.$refs.resPanel.setLocation(left+60, top-100, 0, 0)
        this.resPanel.left = true
        this.resPanel.right = false
      } else {
        this.$refs.resPanel.setLocation(left - 364 - 100, top-100, 0, 0)
        this.resPanel.left = false
        this.resPanel.right = true
      }
      this.showResource = true
    },

    checkCanOpenOnRight(start, offset) {
      const windowWidth = document.body.clientWidth
      if (windowWidth - start - offset > 364) {
        return true
      } else {
        return false
      }
    },

    closePanel() {
      this.showResource = false
      this.selectId = null
      this.marker.remove([this.res.id + 'scan'])
      this.marker.add(this.tmpRes)
    },

    getSummary() {
      getSummary(this, (summary) => {
        if (summary.swap_number) {
          this.summary.swap.showText = `${summary.swap_number}座`
        }
        
        if (summary.nio_npc_charger_number && summary.nio_npc_connector_number) {
          this.summary.npc.showText = `${summary.nio_npc_charger_number}座/${summary.nio_npc_connector_number}根`
        } else if (summary.nio_npc_charger_number) {
          this.summary.npc.showText = `${summary.nio_npc_charger_number}座`
        } else if (summary.nio_npc_connector_number) {
          this.summary.npc.showText = `${summary.nio_npc_connector_number}根`
        }

        if (summary.nio_dest_charger_number && summary.nio_dest_connector_number) {
          this.summary.dest.showText = `${summary.nio_dest_charger_number}座/${summary.nio_dest_connector_number}根`
        } else if (summary.nio_dest_charger_number) {
          this.summary.dest.showText = `${summary.nio_dest_charger_number}座`
        } else if (summary.nio_dest_connector_number) {
          this.summary.dest.showText = `${summary.nio_dest_connector_number}根`
        }

        if (summary.third_connector_number) {
          this.summary.third.showText = `${summary.third_connector_number}根`
        }

        const countrySummary = {
          swapShowText: this.summary.swap.showText,
          npcShowText: this.summary.npc.showText,
          destShowText: this.summary.dest.showText,
          thirdShowText: this.summary.third.showText,
        }

        this.$store.commit('setCountrySummary', countrySummary)
      })
    },

    getAround() {
      getAround(this, (result) => {
        const countryPowers = formatAround(result.powers)
        this.$store.commit('setCountryPowers', countryPowers)
        this.countryPowers = countryPowers
        this.markers = [
          ...countryPowers.dest,
          ...countryPowers.npc, 
          ...countryPowers.swap, 
        ]
        this.showMarkers()
      }, {
        with_national_model: true
      })
    },

    filterBtnClickHandler(btn) {
      this.summary[btn].isSelect = !this.summary[btn].isSelect
      const keys = Object.keys(this.summary)
      const selAll = keys.every(item => this.summary[item].isSelect) || keys.every(item => !this.summary[item].isSelect)
      if (selAll) {
        this.thirdLayer.setVisible(true)
        this.markers = [
          ...this.countryPowers.dest,
          ...this.countryPowers.npc,
          ...this.countryPowers.swap,
        ]
      } else {
        if(this.summary.third.isSelect) {
          this.thirdLayer.setVisible(true)
        } else {
          this.thirdLayer.setVisible(false)
        }

        this.markers = []
        let markers = {}
        for(const key in this.summary) {
          if (key !== 'third' && this.summary[key].isSelect) {
            markers[key] = this.countryPowers[key]
          }
        }
        if(markers.dest) {
          this.markers = [...this.markers, ...markers.dest]
        }
        if(markers.npc) {
          this.markers = [...this.markers, ...markers.npc]
        }
        if(markers.swap) {
          this.markers = [...this.markers, ...markers.swap]
        }
      }
      this.showMarkers()
    },

    maxZoomHandler() {
      if (this.currentZoom < this.maxZoom) {
        this.currentZoom++
        this.distributeMap.setZoom(this.currentZoom)
      }
    },

    minZoomHandler() {
      if (this.currentZoom > this.minZoom) {
        this.currentZoom--
        this.distributeMap.setZoom(this.currentZoom)
      }
    },

    zoomChangedHandler() {
      this.currentZoom = this.distributeMap.getZoom()
      if (this.currentZoom === this.minZoom) {
        this.distributeMap.setCenter(this.center)
      }
      if (this.currentZoom >= this.minZoom && this.currentZoom <= this.maxZoom) {
        this.showMarkers()
      }
    },
  },
}
</script>

<style scoped>
.wrap {
  height: 100%;
  width:100vw;
  position: relative;
}
#distribute-map {
  height: 100%;
  width:100vw;
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
  color: #040B29;
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
  color: #040B29;
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
  border: 0.02rem solid #00BEBE;
}
</style>
