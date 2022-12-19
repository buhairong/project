<template>
    <div>
        <choose-area @change="change"/>
    </div>
</template>

<script lang="ts" setup>
const change = (data: any) => { 
  console.log(data)
}
</script>

<style lang="scss" scoped>
</style>