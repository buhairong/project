<template>
    <el-button type="primary" @click="handleClick">
        <slot></slot>
    </el-button>
    <el-dialog :title="title" v-model="props.visible">
        111
    </el-dialog>
</template>

<script lang="ts" setup>
import { watch } from 'vue'

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

const handleClick = () => {
    emits('update:visible', !props.visible)
}
</script>

<style lang="scss" scoped>

</style>