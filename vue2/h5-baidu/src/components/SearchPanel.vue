<template>
  <div id="searchPanel">
    <div v-show="display==1">
      <div style="padding: 10px; position: relative">
        <div class="search-bar">
          <img class="nio-invisible nio-internal" src="images/search.png">
          <input @input="inputText" type="text" placeholder="查找地点、加电资源" v-model="searchText">
          <img class="clear nio-invisible nio-internal" @click="clear" v-show="searchText?true:false" src="images/search/clear.png" width="16px"
               height="16px">
        </div>
        <div @click="cancel" style="position: absolute; right: 15px; top: 10px; height: 45px; line-height: 45px">取消
        </div>
      </div>
      <div class="overflow-scroll" ref="overflow3" v-loading="loading">
        <div v-if="searchText">
          <div v-if="!hasResult">
            <div style="height: 50px"></div>
            <div style="text-align: center">
              <img class="nio-invisible nio-internal" src="images/search/no-result.png" width="320px" height="160px">
            </div>
            <div style="text-align: center;font-size: 16px;color: #9B9DA9;">
              暂无相关结果
            </div>
          </div>
          <div v-else>
            <div class="section">{{ poiResult.length == 0 ? '暂无相关目的地' : '目的地' }}</div>
            <div class="result" ref="poiResult">
              <div @click="showPoi(c)" v-for="(c, i) in poiResult" :key="'p'+i">
                <SearchResult :name="c.html" :addr="c.addr" icon="location"/>
              </div>
            </div>
            <div v-if="!isPc&&poiResult.length>3&&resResult.length>0" @click="showAllPoi">
              <ToggleBar :show-all="poiShowAll"/>
            </div>
            <div class="split-line"></div>
            <div class="section">{{ resResult.length == 0 ? '暂无相关加电资源' : '加电资源' }}</div>
            <div class="result" ref="resResult">
              <div @click="showRes(c)" v-for="(c, i) in resResult" :key="'r'+i">
                <SearchResult :name="c.html" :addr="c.addr" icon="power"/>
              </div>
            </div>
            <div v-if="!isPc&&resResult.length>3&&poiResult.length>0" @click="showAllRes">
              <ToggleBar :show-all="resShowAll" @click="showAllRes"/>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="section">
            <div>热门地区</div>
            <div style="position:absolute; top:15px; right: 20px;" @click="display=2">全部地区<img
                style="vertical-align: middle; margin-left: 3px"
                width="20" src="images/search/next.png"></div>
          </div>
          <HotCity :display="display" :city="city"/>
          <div style="height: 5px"></div>
          <div v-show="history.length>0">
            <div class="split-line"></div>
            <div class="section">搜索历史</div>
          </div>
          <div @click="selectHistory(c)" v-for="(c,i) in history" :key="i">
            <SearchResult :name="c.name" :addr="c.addr" icon="history"/>
          </div>
        </div>
      </div>
    </div>
    <div v-show="display==2">
      <div class="city-header">
        <div style="position: absolute; margin-left: 20px; height: 44px; line-height: 44px;">
          <img class="nio-invisible nio-internal" @click="selectBack" style="vertical-align: middle" src="images/search/prev.png" width="24">
        </div>
        <div>地区</div>
      </div>
      <div class="overflow-scroll" ref="overflow">
        <div class="separator">当前位置</div>
        <div id="city-current">
          <img class="nio-invisible nio-internal" src="images/search/location-selected.png" width="24">
          <span>{{ currentCity }}</span>
        </div>
        <div class="separator">热门地区</div>
        <HotCity :display="display" :city="city"/>
        <div style="margin-bottom: 10px" class="separator">国内其他地区</div>
        <div class="city-list">
          <div @click="clickCity(c)" v-for="(c, i) in cityList" :key="i">{{ c.name }}</div>
        </div>
      </div>
    </div>
    <div v-show="display==3">
      <div class="city-header">
        <div style="position: absolute; margin-left: 20px; height: 44px; line-height: 44px;">
          <img class="nio-invisible nio-internal" @click="selectBack" style="vertical-align: middle" src="images/search/prev.png" width="24">
        </div>
        <div>{{ citySelected }}</div>
      </div>
      <div class="overflow-scroll city-list" ref="overflow2">
        <div @click="clickCity(c)" v-for="(c, i) in citySelectedChildren" :key="i">{{ c.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HotCity from "@/components/HotCity";
import SearchResult from "@/components/SearchResult";
import ToggleBar from "@/components/ToggleBar";
import {CITY_LIST} from '@/city'
import PubSub from 'pubsub-js'
import {convertHtml, suggest} from '@/api'
import cookie from 'js-cookie'
import {COOKIE_HISTORY_NAME, MAX_HISTORY} from "@/common";

export default {
  components: {HotCity, SearchResult, ToggleBar},
  props: ['currentCity', 'isPc', 'city', 'code'],
  data() {
    return {
      display: 1,
      cityList: [],
      citySelected: '',
      citySelectedChildren: [],
      searchText: '',
      resResult: [],
      poiResult: [],
      resShowAll: false,
      poiShowAll: false,
      unitHeight: 73,
      history: [],
      loading: false,
    }
  },
  computed: {
    hasResult() {
      if (this.resResult.length > 0 || this.poiResult.length > 0) {
        return true
      }
      return false
    }
  },
  mounted() {
    this.cityList = CITY_LIST
    this.setHeight()
    this.loadHistory()
  },
  methods: {
    request(code, keyword) {
      const _this = this
      suggest(code, keyword, this, function (data) {
        console.log(data)
        setTimeout(() => {
          _this.loading = false
        }, 300)
        _this.poiResult.splice(0, _this.poiResult.length)
        _this.resResult.splice(0, _this.resResult.length)
        const ps = data.pois
        if (ps) {
          for (let i in ps) {
            let o = {
              lat: ps[i].lat,
              lng: ps[i].lng,
              name: ps[i].name,
              addr: ps[i].address
            }
            o.html = convertHtml(ps[i].name, keyword)
            _this.poiResult.push(o)
          }
        }
        const rs = data.resources
        if (rs) {
          for (let i in rs) {
            let o = {
              id: rs[i].resource_id,
              resType: rs[i].resource_type,
              lat: rs[i].lat,
              lng: rs[i].lng,
              name: rs[i].name,
              addr: rs[i].address
            }
            o.html = convertHtml(rs[i].name, keyword)
            _this.resResult.push(o)
          }
        }
        _this.$nextTick(() => {
          if (_this.isPc) {
            _this.$refs.poiResult.style.height = _this.unitHeight * _this.poiResult.length + 'px'
            _this.$refs.resResult.style.height = _this.unitHeight * _this.resResult.length + 'px'
          } else {
            let countP = _this.poiResult.length > 3 ? 3 : _this.poiResult.length
            if (_this.resResult.length == 0) {
              countP = _this.poiResult.length
            }
            let countR = _this.resResult.length > 3 ? 3 : _this.resResult.length
            if (_this.poiResult.length == 0) {
              countR = _this.resResult.length
            }
            console.log(countP, countR)
            _this.$refs.poiResult.style.height = _this.unitHeight * countP + 'px'
            _this.$refs.resResult.style.height = _this.unitHeight * countR + 'px'
          }
          _this.loading = false
        })
      })
    },
    cancelRequest() {
      if (typeof this.source === 'function') {
        this.source('终止请求')
      }
    },

    selectHistory(h) {
      if (h.type == 'poi') {
        this.showPoi(h)
      } else if (h.type == 'res') {
        this.showRes(h)
      }
    },
    setHeight() {
      let o = 0
      if (this.isPc) {
        o = 68
      }
      const totalHeight = document.body.offsetHeight
      this.$refs.overflow.style.height = totalHeight - 44 - o + 'px'
      this.$refs.overflow2.style.height = totalHeight - 44 - o + 'px'
      this.$refs.overflow3.style.height = totalHeight - 65 - o + 'px'
    },
    clickCity(c) {
      if (c.cities) {
        this.display = 3
        this.citySelected = c.name
        this.citySelectedChildren = c.cities
      } else {
        this.display = 1
        PubSub.publish('selectCity', c.simple)
      }
    },
    selectBack() {
      if (this.display == 3) {
        this.display = 2
      } else if (this.display == 2) {
        this.display = 1
      }
    },
    clear() {
      this.loading = false
      this.searchText = ''
      this.resShowAll = false
      this.poiShowAll = false
    },
    cancel() {
      this.clear()
      PubSub.publish('hideSearch')
    },
    inputText(e) {
      const {value} = e.target;
      if (!value) {
        this.clear()
      } else {
        const _this = this
        this.loading = true
        _this.request(this.code, value)
      }
    },
    showAllPoi() {
      this.poiShowAll = !this.poiShowAll
      if (this.poiShowAll) {
        this.$refs.poiResult.style.height = this.unitHeight * this.poiResult.length + 'px'
      } else {
        this.$refs.poiResult.style.height = this.unitHeight * (this.poiResult.length > 3 ? 3 : this.poiResult.length) + 'px'
      }
    },
    showAllRes() {
      this.resShowAll = !this.resShowAll
      if (this.resShowAll) {
        this.$refs.resResult.style.height = this.unitHeight * this.resResult.length + 'px'
      } else {
        this.$refs.resResult.style.height = this.unitHeight * (this.resResult.length > 3 ? 3 : this.resResult.length) + 'px'
      }
    },
    showPoi(c) {
      c.type = 'poi'
      this.clear()
      this.display = 1
      PubSub.publish('selectPoi', c)
      this.addToHistory(c)
    },
    showRes(c) {
      c.type = 'res'
      this.clear()
      this.display = 1
      PubSub.publish('selectRes', c)
      this.addToHistory(c)
    },
    addToHistory(c) {
      const key = c.lat + '-' + c.lng
      for (let i = this.history.length - 1; i >= 0; i--) {
        const _key = this.history[i].lat + '-' + this.history[i].lng
        if (key == _key) {
          this.history.splice(i, 1)
        }
      }
      this.history.splice(0, 0, c)

      let max = MAX_HISTORY
      if (this.history.length > max) {
        this.history.splice(max, this.history.length - max)
      }
      this.saveHistory()
    },
    loadHistory() {
      const data =  cookie.get(COOKIE_HISTORY_NAME)
      if(data) {
        this.history = JSON.parse(data)
      } else {
        this.history = []
      }
    },
    saveHistory() {
      cookie.set(COOKIE_HISTORY_NAME, JSON.stringify(this.history), {expires: 7})
    }
  }
}
</script>

<style scoped>
.result {
  overflow: hidden;
  height: 219px;
  transition: all 0.5s ease 0s;
}

#wrapper-pc #searchPanel {
  width: 345px;
  height: unset;
  top: unset;
  bottom: 34px;
  left: 15px;
  max-height: calc(100% - 68px);
  border-radius: 10px;
}

.overflow-scroll {
  overflow-y: auto;
  scrollbar-width: none;
}

#searchPanel {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 20;
  background: #FFFFFF;
  top: 0;
  left: 0;
  font-weight: 400;
  color: #000F16;
}

.search-bar {
  height: 45px;
  background: #F7F7F8;
  color: #9B9DA9;
  line-height: 45px;
  width: calc(100% - 52px);
  font-size: 16px;
  position: relative;
  border-radius: 2px;
}

.search-bar img:first-child {
  margin-left: 20px;
  margin-top: -3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.search-bar img:last-child {
  position: absolute;
  right: 20px;
  top: 15px;
  width: 16px;
}

.search-bar input {
  margin-left: 5px;
  border: 0;
  background: #F7F7F8;
  height: 30px;
  font-weight: 400;
  outline: 0;
  font-size: 16px;
  color: #000F16;
  width: calc(100% - 96px);
}

.search-bar input::-webkit-input-placeholder {
  color: #9B9DA9;
}

.search-bar input:-moz-placeholder {
  /* FF 4-18 */
  color: #9B9DA9;
}

.search-bar input::-moz-placeholder {
  /* FF 19+ */
  color: #9B9DA9;
}

.search-bar input:-ms-input-placeholder {
  /* IE 10+ */
  color: #9B9DA9;
}

.section {
  padding-top: 15px;
  padding-left: 25px;
  position: relative;
  height: 24px;
  color: #9B9DA9;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
}

.city-header {
  position: relative;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
}

.separator {
  height: 30px;
  background: #F7F7F8;
  font-size: 12px;
  color: #9B9DA9;
  line-height: 30px;
  padding-left: 25px;
}

#city-current {
  height: 60px;
  line-height: 60px;
  padding-left: 25px;
  font-size: 16px;
}

#city-current img {
  vertical-align: middle;
  margin-right: 5px;
}

.city-list {
  font-size: 16px;
  padding-left: 25px;
  padding-right: 25px;
}

.city-list div {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #E5E5EA;
}

.split-line {
  height: 8px;
  background: #F7F7F8;
}
</style>