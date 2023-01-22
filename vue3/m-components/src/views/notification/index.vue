<template>
  <div class="">
    <div><notification :value="50" /></div>
    <br><br>
    <div>
      <notification :value="50" :max="30" >
        <template #default>
          <notification-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction"></notification-list>
        </template>
      </notification>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { list, actions } from './data'

const clickItem = () => {

}

const clickAction = () => {
  
}
</script>

<style lang="scss" scoped>
</style>
