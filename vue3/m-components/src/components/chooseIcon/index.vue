<template>
    <el-button type="primary" @click="handleClick">
        <slot></slot>
    </el-button>
    <el-dialog :title="title" v-model="dialogVisible">
        111
    </el-dialog>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'

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

const handleClick = () => {
    emits('update:visible', !props.visible)
}

watch(() => props.visible, val => {
  dialogVisible.value = val
})

watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>

</style>