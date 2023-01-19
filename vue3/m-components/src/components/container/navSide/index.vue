<template>
    <m-menu :data="data" :collapse="collapse" router :defaultActive="$route.path"></m-menu>
    <!-- <infinite-menu :data="data" :collapse="collapse" router defaultActive="/"></infinite-menu> -->
    <!-- <el-menu
        default-active="/"
        class="el-menu-vertical-demo"
        :collapse="collapse"
        @select="handleSelect"
    >
        <el-menu-item index="/">
            <el-icon-menu />
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/chooseIcon">
            <el-icon-menu />
            <span>图标选择器</span>
        </el-menu-item>
        <el-menu-item index="/chooseArea">
            <el-icon-menu />
            <span>省市区选择</span>
        </el-menu-item>
        <el-menu-item index="/menu">
            <el-icon-menu />
            <span>菜单</span>
        </el-menu-item>
    </el-menu> -->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
    collapse: Boolean
}>()

const router = useRouter()

const data = [
    {
        icon: 'HomeFilled',
        name: '首页',
        index: '/',
    },
    {
        icon: 'Check',
        name: '图标选择器',
        index: '/chooseIcon',
    },
    {
        icon: 'Location',
        name: '省市区选择',
        index: '/chooseArea',
    },
    {
        icon: 'Sort',
        name: '趋势标记',
        index: '/trend',
    },
    {
        icon: 'Timer',
        name: '时间选择',
        index: '/chooseTime',
    },
    {
        icon: 'Bell',
        name: '通知菜单',
        index: '/notification',
    },
    {
        icon: 'Menu',
        name: '导航菜单',
        index: '/menu',
    },
    {
        icon: 'TurnOff',
        name: '城市选择',
        index: '/chooseCity',
    },
    {
        icon: 'DArrowRight',
        name: '进度条',
        index: '/progress',
    },
    {
        icon: 'Calendar',
        name: '日历',
        index: '/calendar',
    },
    {
        icon: 'Setting',
        name: '表单',
        index: '/form',
    },
    {
        icon: 'Grid',
        name: '表格',
        index: '/table',
    },
]

const handleSelect = (path: string) => {
    router.push(path)
}
</script>

<style lang="scss" scoped>

</style>