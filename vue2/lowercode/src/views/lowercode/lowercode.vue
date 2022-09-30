<template>
  <div class='page'>
    <div class="layout">
      <div class="widgets">
        <div class="widget" @click="addWidget('group1', 'Input')">input</div>
        <div class="widget" @click="addWidget('group1', 'Select')">select</div>
        <div class="widget" @click="addWidget('group1', 'Banner')">banner</div>
      </div>
      <div class="wechat">
        <draggable
          v-model="widgetList"
          group="group1"
          animation="1000"
          chosen-class="chosen"
          @end="end"
        >
          <transition-group>
            <div
              v-for="item in widgetList"
              :key="item.id"
              @click="handlerClick(item.id)"
            >
              <component
                :is="`${item.widget}Component`"
              />
              <div class="close" @click="close(item.id)">X</div>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="props">
        <component :is="currentWidget"></component>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import BannerComponent from './components/banner/BannerComponent.vue'
import BannerProp from './components/banner/BannerProp.vue'
import InputComponent from './components/input/InputComponent.vue'
import InputProp from './components/input/InputProp.vue'
import SelectComponent from './components/select/SelectComponent.vue'
import SelectProp from './components/select/SelectProp.vue'

export default {
  name: 'lowerCode',
  props: {},
  data () {
    return {
      widgetList: [],
      currentWidget: ''
    }
  },
  watch: {},
  computed: {},
  mounted () {},
  methods: {
    addWidget (group, widget) {
      let widgetId = 0
      console.log('this.widgetList', this.widgetList)
      if (this.widgetList.length) {
        const maxId = this.widgetList[this.widgetList.length - 1].id
        widgetId = maxId + 1
      }
      console.log('widgetId', widgetId)
      this.widgetList.push({
        id: widgetId,
        group,
        widget
      })
      this.currentWidget = `${widget}Prop`
    },

    end (e) {
      console.log('end', e)
      console.log('end1', this.widgetList)
    },

    close (id) {
      console.log('close', id)
    },

    choose (e) {
      console.log('choose', e)
    },

    handlerClick (id) {

    }
  },
  components: {
    draggable,
    BannerComponent,
    BannerProp,
    InputComponent,
    InputProp,
    SelectComponent,
    SelectProp
  }
}
</script>
<style lang="scss" scoped>
  .page {
    .layout {
      margin: 20px;
      padding:20px;
      display: flex;
      justify-content: space-between;
      .wechat {
        width: 375px;
        height: 667px;
        border: 1px solid #ccc;
        overflow: auto;
      }
      .widgets {
        flex: 1;
      }
      .props {
        flex: 1;
      }
    }
  }
  .chosen {
    border: 1px dashed red;
  }
</style>
