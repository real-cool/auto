<script setup lang="ts">
import {ListerProps} from "../utils/type";

defineProps<ListerProps>()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row justify-between py-2 px-3 items-center text-base">
      <span>{{title}}</span>
      <div class="flex flex-row gap-1 items-center"></div>
    </div>
    <div></div>
  </div>
</template>

<style scoped>

</style>