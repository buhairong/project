<template>
    <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs" class="el-menu-vertical-demo">
        <template v-for="(item, index) in data" :key="index">
            <el-menu-item 
                v-if="!item[children] || !item[children].length"
                :index="item.index"
            >
                <component v-if="item.icon" :is="`el-icon-${toLine(item[icon])}`"></component>
                <span>{{ item[name] }}</span>
            </el-menu-item>
            <el-sub-menu :index="item.index" v-else>
                <template #title>
                    <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
                    <span>{{ item[name] }}</span>
                </template>
                <el-menu-item 
                    v-for="(item1, index1) in item.children" 
                    :key="index1"
                    :index="item1[index]"
                > 
                    <component v-if="item1.icon" :is="`el-icon-${toLine(item1[icon])}`"></component>
                    <span>{{ item1[name] }}</span>
                </el-menu-item>
            </el-sub-menu>
        </template>
    </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { toLine } from '../utils/index'

const props = defineProps({
    data: {
        type: Array as PropType<any[]>,
        required: true,
    },
    defaultActive: {
        type: String,
        default: ''
    },
    router: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: 'name'
    },
    index: {
        type: String,
        default: 'index'
    },
    icon: {
        type: String,
        default: 'icon'
    },
    children: {
        type: String,
        default: 'children'
    },
})
</script>

<style lang="scss" scoped>
svg {
    margin-right: 4px;
    width: 1em;
    height: 1em;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>