<template>
    <el-button type="primary" @click="handleClick">
        <slot></slot>
    </el-button>
    
    <el-dialog :title="title" v-model="dialogVisible">
        <el-scrollbar height="500px">
            <div class="container">
                <div class="item" v-for="(item, index) in Object.keys(Icons)" :key="index" @click="clickItem(item)">
                    <div>
                        <component :is="`el-icon-${toLine(item)}`" />
                    </div>
                    <div class="text">{{item}}</div>
                </div>
            </div>
        </el-scrollbar> 
    </el-dialog>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from '../utils/index'
import { useCopy } from '../hooks/useCopy/index'

const props = withDefaults(
    defineProps<{
        title: string,
        visible: boolean,
    }>(),
    {
        title: '选择图标',
        visible: false
    }
)

const emits = defineEmits(['update:visible'])

const dialogVisible = ref<boolean>(props.visible)

watch(() => props.visible, val => {
  dialogVisible.value = val
})

watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})

const handleClick = () => {
    emits('update:visible', !props.visible)
}

const clickItem = (item: string) => {
    let text = `<el-icon-${toLine(item)} />`
    useCopy(text)
    dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
        margin-bottom: 20px;
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        height: 70px;
        .text {
            flex: 1;
        }
    }
}

svg {
    width: 2em;
    height: 2em;
}
</style>