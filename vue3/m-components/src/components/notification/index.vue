<template>
  <el-popover
    placement="bottom"
    :width="300"
    trigger="click"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge 
        :value="value"
        :max="max"
        :is-dot="isDot"
        style="cursor: pointer"
      >
        <component 
          :is="`el-icon-${toLine(icon)}`"
        />
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { toLine } from '../../utils'

const props = defineProps({
  icon: {
    type: String,
    default: 'Bell'
  },
  value: {
    type: [String, Number],
    default: ''
  },
  max: {
    type: Number,
  },
  isDot: {
    type: Boolean,
    default: false,
  }
})
</script>

<style lang="scss" scoped>
</style>
