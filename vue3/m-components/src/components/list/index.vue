<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="300px">
          <div class="container" v-for="(item1, index1) in item.content" :key="index1" @click="clickItem(item1, index1)">
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" :type="item1.tagType" size="mini">{{ item1.tag }}</el-tag>
              </div>
              <div v-if="item1.desc" class="time">{{ item1.desc }}</div>
              <div v-if="item1.time" class="time">{{ item1.time }}</div>
            </div>
          </div>
          <div class="actions">
            <div class="a-item" @click="clickAction(action, i)" :class="{border: i !== actions.length-1}" v-for="(action, i) in actions" :key="i">
              <div class="a-icon" v-if="action.icon">
                <component :is="`el-icon-${toLine(action.icon)}`" />
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { ListOptions, ActionOptions } from './types'
import { toLine } from '../../utils'
import { List } from 'lodash';

const props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})

const emits = defineEmits(['clickItem', 'clickAction'])

const clickItem = (item: ListOptions, index: number) => {
  emits('clickItem', {item, index})
}

const clickAction = (item: ActionOptions, index: number) => {
  emits('clickAction', {item, index})
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background: #e6f6ff;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}

.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .a-item {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>
