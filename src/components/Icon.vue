<script setup lang="ts">
import type {IconSize, IconType} from "../utils/type";
import {twMerge} from "tailwind-merge";

defineProps<{
  icon: IconType;
  size: IconSize;
}>()

const sizeClass = {
  sa: 'text-xs w-3 h-3',
  sm: 'text-md w-4 h-4',
  base: 'text-lg w-5 h-5',
  md: 'text-2xl w-6 h-6',
  lg: 'text-3xl w-8 h-8'
}
</script>

<template>
  <i :class="twMerge('iconfont', `icon-${icon}`, sizeClass[size])"></i>
</template>

<style scoped>

</style>