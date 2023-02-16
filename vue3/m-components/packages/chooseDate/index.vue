<template>
    <div style="display: flex;">
        <div style="margin-right: 20px;">
            <el-date-picker
                v-model="startDate"
                type="date"
                :placeholder="startPlaceholder"
                :disabledDate="startDisabledDate"
                @change="changeStartDate"
                v-bind="$attrs.startOptions"
            />
        </div>
        <div>
            <el-date-picker
                v-model="endDate"
                type="date"
                :placeholder="endPlaceholder"
                :disabled="endDateDisabled"
                :disabledDate="endDisabledDate"
                @change="changeEndDate"
                v-bind="$attrs.endOptions"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
    startPlaceholder: {
        type: String,
        default: '请选择开始日期'
    },
    endPlaceholder: {
        type: String,
        default: '请选择结束日期'
    },
    disabledToday: {
        type: Boolean,
        default: true
    },
})

const emits = defineEmits(['startChange', 'endChange'])

const startDate = ref<Date | null>(null)
const endDate = ref<Date | null>(null)
const endDateDisabled = ref<boolean>(true)

const startDisabledDate = (time: Date) => {
    if (props.disabledToday) {
        return time.getTime() < Date.now() - 24 * 60 * 60 * 1000
    }
}

const endDisabledDate = (time: Date) => {
    if (startDate.value) {
        return time.getTime() < startDate.value.getTime()
    }
}

const changeStartDate = (val: string) => {
    console.log('changeStartDate', val)
    if (!val) {
        endDate.value = null
        endDateDisabled.value = true
    } else {
        endDateDisabled.value = false
        emits('startChange', val)
    }
}

const changeEndDate = (val: string) => {
    console.log('changeEndDate', val)
    if (val) {
        emits('endChange', {
            startDate: endDate.value,
            endDate: val
        })
    }
}
</script>

<style lang="scss" scoped>

</style>