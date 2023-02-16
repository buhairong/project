<template>
    <el-popover
        v-model:visible="visible"
        placement="bottom-start"
        :width="400"
        trigger="click"
    >
        <template #reference>
            <div class="result">
                <div>{{ result }}</div>
                <div>
                    <el-icon-arrowdown :class="{rotate: visible}"/>
                </div>
            </div>
        </template>
        <div class="container">
            <el-row>
                <el-col :span="8">
                    <el-radio-group v-model="radioValue" size="small">
                        <el-radio-button label="按城市" />
                        <el-radio-button label="按省份" />
                    </el-radio-group>
                </el-col>
                <el-col :offset="1" :span="15">
                    <el-select 
                        v-model="selectValue"
                        placeholder="请选择城市" 
                        size="small" 
                        filterable
                        :filter-method="filterMethod"
                        @change="changeSelect"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        />
                    </el-select>
                </el-col>
            </el-row>
            <div v-if="radioValue === '按城市'">
                <div class="city">
                    <div class="city-item" v-for="(value, key) in cities.cities" :key="key" @click="clickChat(key)">
                        {{ key }}
                    </div>
                </div>
                <el-scrollbar height="300px">
                    <el-row v-for="(value, key) in cities.cities" :key="key" :id="key" style="margin-bottom: 10px;">
                        <el-col :span="2">{{ key }}:</el-col>
                        <el-col :span="22">
                            <div class="city-name">
                                <div class="city-name-item" v-for="item in value" :key="item.id" @click="clickItem(item)">{{ item.name }}</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-scrollbar>
            </div>
            <div v-else>
                <div class="province">
                    <div class="province-item" v-for="(value, key) in province" :key="key" @click="clickChat(key)">
                        {{ key }}
                    </div>
                </div>
                <el-scrollbar height="300px">
                    <template v-for="(value, key) in province" :key="key" >
                        <el-row v-for="item in value" :key="item.id" :id="item.id" style="margin-bottom: 10px;">
                            <el-col :span="4">{{ item.name }}:</el-col>
                            <el-col :span="20">
                                <div class="province-name">
                                    <div class="province-name-item" v-for="(city, index) in item.data" :key="index" @click="clickProvince(city)">{{ city }}</div>
                                </div>
                            </el-col>
                        </el-row>
                    </template>
                </el-scrollbar>
            </div>
        </div>
    </el-popover>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import cities from './lib/city'
import province from './lib/province.json'
import { City, Province } from './types'

const emits = defineEmits(['changeCity', 'changeProvince'])

const allCities: City[] = (Object.values(cities.cities).flat(Infinity) as City[])
const result = ref<string>('请选择')
const visible = ref<boolean>(false)
const radioValue = ref<string>('按城市')
const selectValue = ref<string>('')
const options = ref<City[]>(allCities)

const clickItem = (item: City) => {
    result.value = item.name
    visible.value = false
    emits('changeCity', item)
}

const clickChat = (item: string) => {
    const el = document.getElementById(item)
    if (el) {
        el.scrollIntoView()
    }
}

const clickProvince = (item: string) => {
    result.value = item
    visible.value = false
    emits('changeProvince', item)
}

const changeSelect = (e: number) => {
    const city = allCities.find(item => item.id === e)!
    result.value = city.name
    visible.value = false
    emits('changeCity', city)
}

const filterMethod = (val: string) => {
    const value = val.trim()
    if (value) {
        options.value = allCities.filter(item => {
            return item.spell.includes(value) || item.name.includes(value)
        })
    } else {
        options.value = allCities
    }
}

</script>

<style lang="scss" scoped>
.result {
    width: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
}
svg {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    margin-left: 4px;
    transition: all .25s linear;
}
.rotate {
    transform: rotate(180deg);
}
.container {
    padding: 6px;
}
.city, .province {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    &-item {
        padding: 3px 6px;
        margin-right: 8px;
        margin-bottom: 8px;
        border: 1px solid #eee;
        cursor: pointer;
    }
}

.city-name, .province-name{
    display: flex;
    flex-wrap: wrap;
    &-item {
        margin-right: 6px;
        margin-bottom: 6px;
        cursor: pointer;
    }
}
</style>