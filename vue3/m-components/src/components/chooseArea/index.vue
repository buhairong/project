<template>
    <div>
        <el-select placeholder="请选择省份" v-model="province" clearable>
          <el-option 
            v-for="item in AllAreas"
            :key="item.code"
            :value="item.code"
            :label="item.name"
          >
          </el-option>
        </el-select>

        <el-select placeholder="请选择城市" v-model="city" :disabled="!province" clearable>
          <el-option 
            v-for="item in selectCity"
            :key="item.code"
            :value="item.code"
            :label="item.name"
            >
          </el-option>
        </el-select>

        <el-select placeholder="请选择区域" v-model="area" :disabled="!province || !city" clearable>
          <el-option 
            v-for="item in selectArea"
            :key="item.code"
            :value="item.code"
            :label="item.name"
            >
          </el-option>
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import AllAreas from './lib/pca-code.json'

const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
const selectCity = ref<any[]>([])
const selectArea = ref<any[]>([])

watch(() => province.value, val => {
  city.value = ''
  area.value = ''
  if (val) {
    const findItem = AllAreas.find(item => item.code === province.value)
    if (findItem) {
      selectCity.value = findItem.children
    } else {
      selectCity.value = []
    }
  }
})

watch(() => city.value, val => {
  area.value = ''
  if (val) {
    const findItem = selectCity.value.find(item => item.code === city.value)
    if (findItem) {
      selectArea.value = findItem.children
    } else {
      selectArea.value = []
    }
  }
})

</script>

<style lang="scss" scoped>
.el-select {
    margin: 0 10px;
}
</style>