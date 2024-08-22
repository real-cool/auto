<script setup lang="ts">
import {ButtonProps} from "../utils/type";
import {twMerge} from "tailwind-merge";
import Icon from "./Icon.vue";

defineProps<ButtonProps>()
const emits = defineEmits(['click'])

const sizeClass = {
  sm: 'px-1 text-sm w-14',
  base: 'px-1.5 py-1 text-base w-16',
  md: 'px-2 py-1 text-md w-18',
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
  <div :class="twMerge('flex flex-row items-center text-nowrap whitespace-nowrap gap-0.5 p-1 justify-center rounded-sm active:bg-opacity-80 m-0.5 overflow-hidden', colorClazz[type || 'primary'], sizeClass[size || 'base'], wrapClass)" @click="emits('click')">
    <Icon v-if="icon" :icon="icon.icon" :size="icon.size" :wrap-class="icon.wrapClass"/>
    {{ text }}
  </div>
</template>

<style scoped>

</style>