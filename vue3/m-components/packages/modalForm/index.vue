<template>
    <el-dialog
        v-model="dialogVisible"
        v-bind="$attrs"
    >
        <template #default>
            <m-form ref="form" :options="options">
                <template #uploadArea>
                    <slot name="uploadArea"></slot>
                </template>
                <template #uploadTip>
                    <slot name="uploadTip"></slot>
                </template>
            </m-form>
        </template>
        <template #footer>
            <slot name="footer" :form="form"></slot>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { FormInstance } from 'element-plus';
import { ref, watch, PropType } from 'vue'
import { FormOptions } from '../form/types/types';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    options: {
        type: Array as PropType<FormOptions[]>,
        required: true
    },
})

const emits = defineEmits(['update:visible'])

const dialogVisible = ref<boolean>(props.visible)
const form = ref<FormInstance>()

watch(() => props.visible, val => {
    dialogVisible.value = val
})

watch(() => dialogVisible.value, val => {
    emits('update:visible', val)
})
</script>

<style lang="scss" scoped>

</style>