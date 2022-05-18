<template>
  <div class='ebook'>
    <transition name="slide-down">
      <div class="title-wrapper" v-show="showTitleAndMenu">
        <div class="left">
          <span class="icon icon-back"></span>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="icon icon-cart"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon icon-person"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon icon-more"></span>
          </div>
        </div>
      </div>
    </transition>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <div class="menu-bar">
      <transition name="slide-up">
        <div class="menu-wrapper" v-show="showTitleAndMenu">
          <div class="icon-wrapper" @click="showContentBar">
            <span class="icon icon-menu"></span>
          </div>
          <div class="icon-wrapper" @click="showSettingBar(2)">
            <span class="icon icon-progress"></span>
          </div>
          <div class="icon-wrapper" @click="showSettingBar(1)">
            <span class="icon icon-bright"></span>
          </div>
          <div class="icon-wrapper" @click="showSettingBar(0)">
            <span class="icon icon-a">A</span>
          </div>
        </div>
      </transition>
      <transition name="slide-up">
        <div class="setting-wrapper" v-show="showSetting">
          <div class="setting-font-size" v-show="settingTag === 0">
            <div class="preview" :style="{fontSize: fontSizeList[0] + 'px'}">A</div>
            <div class="select">
              <div class="select-wrapper" v-for="(item, index) in fontSizeList" :key="index">
                <div class="line"></div>
                <div class="point-wrapper" @click="changeFontSize(item)">
                  <div class="point" v-show="defaultSize === item">
                    <div class="small-point"></div>
                  </div>
                </div>
                <div class="line"></div>
              </div>
            </div>
            <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length - 1] + 'px'}">A</div>
          </div>
          <div class="setting-theme" v-show="settingTag === 1">
            <div class="setting-theme-item" v-for="item in themeList" :key="item.name" @click="setTheme(item.name)">
              <div class="preview" 
                :style="{background: item.style.body.background}"
                :class="{'no-border': item.style.body.background === '#fff'}"
              ></div>
              <div class="text" :class="{selected: item.name === defaultTheme}">{{item.name}}</div>
            </div>
          </div>
          <div class="setting-progress" v-show="settingTag === 2">
            <div class="progress-wrapper">
              <input type="range" class="progress"
                min="0"
                max="100"
                step="1"
                @change="onProgressChange($event.target.value)"
                @input="onProgressInput($event.target.value)"
                :value="progress"
                :disabled="!bookAvailable"
                ref="progress"
              >
            </div>
            <div class="text-wrapper">
              <span>{{bookAvailable ? progress + '%' : '加载中...'}}</span>
            </div>
          </div>
        </div>
      </transition>
      <div class="content-mask" v-show="showContent" @click="hideContent"></div>
      <div class="content" v-show="showContent" >
        <div class="content-wrapper" v-if="bookAvailable">
          <div class="content-item" v-for="(item, index) in navigation.toc" :key="index" @click="jumpTo(item.href)">
            {{item.label}}
          </div>
        </div>
        <div class="empty" v-else>加载中...</div>
      </div>
    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'
const DOWNLOAD_URL = '/static/boo1.epub'

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      showTitleAndMenu: false,
      showSetting: false,
      fontSizeList: [12, 14, 16, 18, 20, 22, 24],
      defaultSize: 16,
      themeList: [
        {
          name: 'default',
          style: {
            body: {
              color: '#000',
              background: '#fff',
            }
          },
        },
        {
          name: 'eye',
          style: {
            body: {
              color: '#000',
              background: '#ceeaba',
            }
          },
        },
        {
          name: 'night',
          style: {
            body: {
              color: '#fff',
              background: '#000',
            }
          },
        },
        {
          name: 'gold',
          style: {
            body: {
              color: '#000',
              background: 'rgb(241, 236, 226)',
            }
          },
        },
      ],
      defaultTheme: 'default',
      settingTag: 0,
      bookAvailable: false, // 图书是否可用状态
      progress: 0,
      showContent: false,
    }
  },
  watch: {},
  computed: {},
  mounted() {
    this.showEpub()
  },

  methods: {
    // 电子书的解析和渲染
    showEpub() {
      // 生成 book 对象
      this.book = new Epub(DOWNLOAD_URL)

      // 生成 Rendition 对象, 通过 book.renderTo 生成
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
      })

      // 通过 Rendition.display 渲染电子书
      this.rendition.display()

      // 获取 theme 对象
      this.themes = this.rendition.themes

      // 设置默认字体
      this.themes.fontSize(this.defaultSize + 'px')

      // 设置主题 
      // 注册主题 this.themes.register(name, styles)
      // 切换主题 this.themes.select(name)
      this.themeList.forEach(theme => this.themes.register(theme.name, theme.style))
      this.themes.select(this.defaultTheme)

      // 获取 locations 对象
      this.book.ready.then(() => {
        this.navigation = this.book.navigation
        return this.book.locations.generate()
      }).then(() => {
        this.locations = this.book.locations
        this.bookAvailable = true
      })
    },

    // 根据链接跳转到指定位置
    jumpTo(href) {
      this.rendition.display(href)
      this.hideTitleAndMenu()
      this.$nextTick(() => {
        this.onProgressInput(this.book.rendition.currentLocation().end.percentage * 100)
      })
    },

    hideTitleAndMenu() {
      this.showTitleAndMenu = false
      this.hideSettingBar()
      this.hideContent()
    },

    hideContent() {
      this.showContent = false
    },

    showContentBar() {
      this.showContent = true
    },

    // progress: 0 - 100
    onProgressChange(progress) {
      const percentage = progress / 100
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.rendition.display(location)
    },

    onProgressInput(progress) {
      this.progress = progress
      this.$refs.progress.style.backgroundSize = `${progress}% 100%`
    },

    prevPage() {
      // Rendition.prev
      if (this.rendition) {
        this.rendition.prev()
        this.onProgressInput(this.book.rendition.currentLocation().end.percentage * 100)
      }
    },

    nextPage() {
      // Rendition.next
      if (this.rendition) {
        this.rendition.next()
        this.onProgressInput(this.book.rendition.currentLocation().end.percentage * 100)
      }
    },

    toggleTitleAndMenu() {
      this.showTitleAndMenu = !this.showTitleAndMenu
      if (!this.showTitleAndMenu) {
        this.hideSettingBar()
      }
    },

    showSettingBar(index) {
      this.showSetting = true
      this.settingTag = index
    },

    hideSettingBar() {
      this.showSetting = false
    },

    changeFontSize(fontSize) {
      this.defaultSize = fontSize
      if (this.themes) {
        this.themes.fontSize(fontSize + 'px')
      }
    },

    setTheme(themeName) {
      if (this.themes) {
        this.themes.select(themeName)
        this.defaultTheme = themeName
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/global.scss';

  .ebook {
    position: relative;
    .title-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 48px;
      z-index: 110;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 8px 8px rgba(0, 0, 0, .15);
      background-color: #fff;
      .left {
        flex: 0 0 60px;
        @include center;
      }
      .right {
        display: flex;
        align-items: center;
        .icon-wrapper {
          padding: 0 20px;
        }
      }
      &.slide-down-enter, &.slide-down-leave-to {
        transform: translateY(-100%);
      }
      &.slide-down-enter-to, &.slide-down-leave {
        transform: translateY(0);
      }
      &.slide-down-enter-active, &.slide-down-leave-active {
        transition: transform .3s linear;
      }
    }
    .read-wrapper {
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        display: flex;
        .left {
          width: 100px;
        }
        .center {
          flex: 1;
        }
        .right {
          width: 100px;
        }
      }
    }
    .menu-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 48px;
      z-index: 110;
      display: flex;
      align-items: center;
      box-shadow: 0 -8px 8px rgba(0, 0, 0, .15);
      background-color: #fff;
      .icon-wrapper {
        flex: 1;
        @include center;
      }
      &.slide-up-enter, &.slide-up-leave-to {
        transform: translateY(100%);
      }
      &.slide-up-enter-to, &.slide-up-leave {
        transform: translateY(0);
      }
      &.slide-up-enter-active, &.slide-up-leave-active {
        transition: transform .3s linear;
      }
    }
    .setting-wrapper {
      position: absolute;
      bottom: 48px;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: #fff;
      z-index: 120;
      box-shadow: 0 -8px 8px rgba(0, 0, 0, .15);
      .setting-font-size {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        .preview {
          width: 40px;
          @include center;
        }
        .select {
          flex: 1;
          display: flex;
          .select-wrapper {
            flex: 1;
            @include center;
            &:first-child {
              .line {
                &:first-child {
                  border-top: none;
                }
              }
            }
            &:last-child {
              .line {
                &:last-child {
                  border-top: none;
                }
              }
            }
            .line {
              flex: 1;
              height: 0;
              border-top: 1px solid #ccc;
            }
            .point-wrapper {
              position: relative;
              width: 0;
              height: 7px;
              border-left: 1px solid #ccc;
              .point {
                width: 20px;
                height: 20px;
                position: absolute;
                top: -8px;
                left: -8px;
                border-radius: 50%;
                background-color: #fff;
                border: 1px solid #ccc;
                box-shadow: 0 4px 4px rgba(0, 0, 0, .15);
                @include center;
                .small-point {
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background-color: #000;
                }
              }
            }
          }
        }
      }
      .setting-theme {
        width: 100%;
        height: 100%;
        @include center;
        .setting-theme-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5px;
          box-sizing: border-box;
          .preview {
            width: 100%;
            height: 20px;
            box-sizing: border-box;
            &.no-border {
              border: 1px solid #ccc;
            }
          }
          .text {
            font-size: 16px;
            color: #999;
            &.selected {
              color: #333;
            }
          }
        }
      }
      .setting-progress {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .progress-wrapper {
          width: 100%;
          height: 100%;
          @include center;
          padding: 0 30px;
          box-sizing: border-box;
          .progress {
            width: 100%;
            -webkit-appearance: none;
            height: 2px;
            background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
            background-size: 0 100%;
            &.focus {
              outline: none;
            }
            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #fff;
              box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
              border: 1px solid #ddd;
            }
          }
        }
      }
    }
    .content-mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 140;
      width: 100%;
      height: 100%;
      background-color: rgba(51, 51, 51, .8);
    }
    .content {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 150;
      width: 70%;
      height: 100%;
      background-color: #fff;
      padding: 20px;
      box-sizing: border-box;
      .content-item {
        width: 100%;
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        @include center;
      }
    }
  }
</style>