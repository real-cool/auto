<script setup lang="ts">
import {ButtonProps} from "../utils/type";
import {twMerge} from "tailwind-merge";

defineProps<ButtonProps>()
const emits = defineEmits(['click'])

const sizeClass = {
  sm: 'px-1.5 py-0.5 text-sm',
  base: 'px-3 py-1 ',
  md: 'px-4 py-1 text-md',
}

const colorClazz = {
  primary: 'bg-primary-400 text-white',
  success: 'bg-success-500 text-white',
  danger: 'bg-danger-400 text-white',
  warning: 'bg-warning-400 text-white',
  info: 'bg-info-400 text-white',
  default: 'bg-default-200 text-white'
}

</script>

<template>
  <span :class="twMerge('px-4 py-1 rounded-sm hover:bg-opacity-80 m-1', colorClazz[type || 'primary'], sizeClass[size || 'base'], wrapClass)" @click="emits('click')">
    {{ text }}
  </span>
</template>

<style scoped>

</style>