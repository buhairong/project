<template>
  <div class="trend">
    <div class="text" :style="{color: textColor}">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component 
        :is="`el-icon-${toLine(upIcon)}`" 
        :style="{color: !reverseColor ? upIconColor : '#52c41a'}" 
        v-if="type === 'up'" 
      />
      <component 
        :is="`el-icon-${toLine(downIcon)}`" 
        :style="{color: !reverseColor ? downIconColor: '#f5222d'}" 
        v-else
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue'
import { toLine } from '../utils'

const props = defineProps({
  // 标记当前趋势是上升还是下降
  type: {
    type: String,
    default: 'up' // 上升: up  下降: down
  },
  // 展示的文字
  // 1.父组件传递
  // 2.插槽
  text: {
    type: String,
    default: '文字'
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
  // 颜色翻转只在默认的颜色下生效，如果使用了自定义的颜色，这个属性就不生效了
  reverseColor: {
    type: Boolean,
    default: false
  },
  upTextColor: {
    type: String,
    default: '#000000'
  },
  downTextColor: {
    type: String,
    default: '#000000'
  },
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  downIcon: {
    type: String,
    default: 'ArrowDown'
  },
})

const slots = useSlots()

const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})

</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
