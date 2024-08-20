<script setup lang="ts">
import TabIndex from "./TabIndex.vue";
import Logs from "./Logs.vue";
import {ref} from "vue";

const home = ref(TabIndex)
$autox.callHandler('onLoaded', "loaded", () => {
})
$autox.registerHandler('home', (data: string, call:(p?: string)=> void) => {
  if (data !== 'home') home.value = Logs
  call("路由回调")
})
</script>

<template>
  <component :is="home"/>
</template>

<style scoped>

</style>