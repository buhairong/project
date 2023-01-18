<template>
    <el-menu
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
    </el-menu>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
    collapse: Boolean
}>()

const router = useRouter()

const handleSelect = (path: string) => {
    router.push(path)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>