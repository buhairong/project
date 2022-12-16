<template>
    <div>
        <el-select placeholder="请选择省份" v-model="province">
            <el-option></el-option>
        </el-select>

        <el-select placeholder="请选择城市" v-model="city">
            <el-option></el-option>
        </el-select>

        <el-select placeholder="请选择区域" v-model="area">
            <el-option></el-option>
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AllAreas from './lib/pca-code.json'

const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
</script>

<style lang="scss" scoped>
.el-select {
    margin: 0 10px;
}
</style>