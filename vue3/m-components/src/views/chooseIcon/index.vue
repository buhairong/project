<template>
    <choose-icon title="选择图标" v-model:visible="visible">
        选择图标
    </choose-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ChooseIcon from '../../components/chooseIcon/index.vue'

const visible = ref<boolean>(false)
</script>

<style lang="scss" scoped>

</style>
