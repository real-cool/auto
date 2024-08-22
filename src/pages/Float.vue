<script setup lang="ts">
import Logger from "./float/Logger.vue";
import Action from "./float/Action.vue";

function changePage(index: number) {
  const title = index === 0 ? '日志' : '功能'
  $autox.callHandler('float_page_change', title, ()=> {})
}
</script>

<template>
  <van-swipe :show-indicators="false" :lazy-render="true" @change="changePage">
    <van-swipe-item>
      <Logger/>
    </van-swipe-item>
    <van-swipe-item>
      <Action/>
    </van-swipe-item>
  </van-swipe>
</template>

<style scoped>

</style>