<script setup lang="ts">
import TabIndex from "./TabIndex.vue";
import Float from "./Float.vue";
import {shallowRef} from "vue";

const home = shallowRef(TabIndex)
$autox.callHandler('onLoaded', "loaded", () => {
})
$autox.registerHandler('home', (data: string, call:(p?: string)=> void) => {
  if (data !== 'home') home.value = Float
  console.log("home", data)
  call("路由回调")
})

</script>

<template>
  <component :is="home"/>
</template>

<style scoped>

</style>