<template>
  <div>
    <div class="flex">
      <div><trend text="营业额" /></div>
      <div><trend text="销售额" type="down" /></div>
    </div>

    <div class="flex">
      <div><trend text="营业额" upIconColor="blue" /></div>
      <div><trend text="销售额" type="down" downIconColor="#123456" /></div>
    </div>
    <div class="flex">
      <div><trend upIconColor="blue" >销售</trend></div>
      <div><trend type="down" downIconColor="#123456" >营业</trend></div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
