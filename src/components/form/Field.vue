<script setup lang="ts">

import {twMerge} from "tailwind-merge";
import {FieldProps} from "../../utils/type.ts";
import {inject, onMounted, ref, watch} from "vue";
import Icon from "../Icon.vue";
import {empty} from "../../utils/rc.ts";

const props = defineProps<FieldProps>()
const emits = defineEmits(['update:value', 'clear', 'change'])
const val = ref()
const form_item_init_cb = inject('form-item-init-cb')
const form_item_value_cb = inject('form-item-value-cb')

const resetCb = function () {
  val.value = null
  emits('update:value', val.value)
  emits('clear', val.value)
  emits('change', val.value)
}

const validateCb = function (res: boolean) {
  errorClass.value = res ? '' : 'border-danger bg-danger-200 bg-opacity-30'
}

onMounted(() => {
  typeof form_item_init_cb === 'function' && form_item_init_cb({name: props.name, validateCb, resetCb})
})
watch(() => props.value, v => {
  val.value = v
}, {immediate: true})
watch(val, n => {
  props.name && typeof form_item_value_cb === 'function' && form_item_value_cb({value: n, name: props.name})
}, {immediate: true})
const errorClass = ref('')

function input(e: any) {
  val.value = e.target.value
  emits('update:value', val.value)
  emits('change', val.value)
}

function clear() {
  val.value = ''
  emits('update:value', val.value)
  emits('clear')
  emits('change', val.value)
}
</script>

<template>
  <div
      :class="twMerge('relative flex box-border flex-row h-7 items-center rounded-md gap-1 shadow-sm', errorClass, wrapClass)">
    <Icon v-if="frontIcon" :icon="frontIcon.icon" :size="frontIcon.size" :wrap-class="frontIcon.wrapClass"/>
    <input :value="val" :name="name" :placeholder="placeholder" :readonly="readonly"
           @input="input"
           :class="twMerge('text-base box-border h-full w-full border-0 outline-none top-1/2 bg-white px-2', inputClass)"/>
    <Icon v-if="!empty(val)" icon="close" wrap-class="text-default-500 absolute cursor-pointer right-2"
          @click.stop="clear" size="sm"/>
    <Icon v-else-if="endIcon" :icon="endIcon.icon"
          :wrap-class="twMerge('text-default-500 absolute cursor-pointer right-2',endIcon.wrapClass)"
          :size="endIcon.size || 'sm'"/>
  </div>
</template>

<style scoped>

</style>