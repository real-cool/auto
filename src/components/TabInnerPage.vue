<script setup lang="ts">
import Tabbar from "./Tabbar.vue";
import {TabInnerPageProps} from "../utils/type.ts";
import {ref} from "vue";

const props = defineProps<TabInnerPageProps>()
const emits = defineEmits(['update:active', 'change'])
const active = ref(props.current || 0)
const swipe = ref()
function change(){
  swipe.value.swipeTo(active.value)
  console.log(swipe.value, active.value)
  emits('update:active', active.value)
  emits('change', active.value)
}

function swipeChange(e) {
  active.value = e;
  emits('update:active', active.value)
  emits('change', active.value)
}
</script>

<template>
  <div class="absolute w-full top-0 h-8 z-10 shadow flex items-center justify-center bg-primary text-white">{{tabs[active].name}}</div>
  <div class="h-8"></div>
  <van-swipe ref="swipe" @change="swipeChange" :show-indicators="false" >
    <van-swipe-item v-for="(item, index) in tabs" :key="index">
      <div class="page-inner bg-gray-100">
        <component :is="item.to"/>
      </div>
    </van-swipe-item>
  </van-swipe>

  <div class="h-14"></div>
  <div class="absolute bottom-0 w-full">
    <tabbar :data="tabs" v-model:active="active" @change="change"/>
  </div>
</template>

<style scoped>
.page-inner {
  overflow: hidden;
  min-height: calc(100vh - 4.5rem);
}
</style>