<template>
    <div>
        <m-progress 
            :percentage="60"
        ></m-progress>
    </div>
    <div>
        <m-progress 
            :percentage="60"
            isAnimation
        ></m-progress>
    </div>
    <div>
        <m-progress 
            :text-inside="true"
            :stroke-width="24"
            :percentage="100"
            status="success"
            isAnimation
        ></m-progress>
    </div>
    <div>
        <m-progress 
            type="circle"
            :percentage="40" 
            status="success"
            isAnimation
        ></m-progress>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
div {
    margin-top: 40px;
}
</style>