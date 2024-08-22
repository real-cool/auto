<script setup lang="ts">
import type {IconProps} from "../utils/type";
import {twMerge} from "tailwind-merge";

defineProps<IconProps>()
const sizeClass = {
  sa: 'text-xs w-3 h-3',
  sm: 'text-md w-4 h-4',
  base: 'text-lg w-5 h-5',
  md: 'text-2xl w-6 h-6',
  lg: 'text-3xl w-8 h-8'
}
</script>

<template>
  <i :class="twMerge('iconfont flex items-center justify-center', `icon-${icon}`, sizeClass[size || 'sa'], wrapClass)"></i>
</template>

<style scoped>

</style>