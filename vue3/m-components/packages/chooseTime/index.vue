<template>
    <div style="display: flex;">
        <div style="margin-right: 20px;">
            <el-time-select
                v-model="startTime"
                :max-time="endTime"
                :placeholder="startPlaceholder"
                :start="startTimeStart"
                :step="startTimeStep"
                :end="startTimeEnd"
                @change="changeStartTime"
                v-bind="$attrs.startOptions"
            />
        </div>
        <div>
            <el-time-select
                v-model="endTime"
                :min-time="startTime"
                :placeholder="endPlaceholder"
                :start="endTimeStart"
                :step="endTimeStep"
                :end="endTimeEnd"
                :disabled="endTimeDisabled"
                @change="changeEndTime"
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
        default: '请选择开始时间'
    },
    startTimeStart: {
        type: String,
        default: '00:00'
    },
    startTimeEnd: {
        type: String,
        default: '24:00'
    },
    startTimeStep: {
        type: String,
        default: '00:30'
    },
    endPlaceholder: {
        type: String,
        default: '请选择结束时间'
    },
    endTimeStart: {
        type: String,
        default: '00:00'
    },
    endTimeStep: {
        type: String,
        default: '00:30'
    },
    endTimeEnd: {
        type: String,
        default: '24:00'
    },
})

const emits = defineEmits(['startChange', 'endChange'])

const startTime = ref<string>('')
const endTime = ref<string>('')
const endTimeDisabled = ref<boolean>(true)

const changeStartTime = (val: string) => {
    if (!val) {
        endTime.value = ''
        endTimeDisabled.value = true
    } else {
        endTimeDisabled.value = false
        emits('startChange', val)
    }
}

const changeEndTime = (val: string) => {
    if (val) {
        emits('endChange', {
            startTime: startTime.value,
            endTime: val
        })
    }
}
</script>

<style lang="scss" scoped>

</style>