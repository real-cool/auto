<script setup lang="ts">
import {FormItemProps, Rules} from "../../utils/type.ts";
import {inject, provide, ref, Ref} from "vue";
import {verify} from "../../utils/verify.ts";
import {twMerge} from "tailwind-merge";

defineProps<FormItemProps>();
const emits = defineEmits(['update:msg', 'change'])
const field = inject('form-field')
const rules = inject('form-rules') as Rules
const updateValue = inject('form-update-value')
const itemFields: Ref<Record<string, any>> = ref({})
let validateCb: Record<string, (res: boolean) => void> = {}
let resetCb: Record<string, () => void> = {}
const message = ref('')
const resetField = () => {
  for (let k in validateCb) {
    if (typeof validateCb[k] === 'function') validateCb[k](true)
  }
  for (let k in resetCb) {
    if (typeof resetCb[k] === 'function') resetCb[k]()
  }
}

const validateField = () => {
  for (let k in itemFields) {
    if (rules[k]) {
      let res = verify(itemFields.value[k], rules[k])
      if (typeof validateCb[k] === 'function') validateCb[k](res.result)
      if (!res.result) {
        message.value = res.message
        emits('update:msg', res.message)
        return false
      }
    }
  }
  message.value = ''
  emits('update:msg', '')
  return true
}
if (typeof field === 'function') field({resetField, validateField})
const fieldValueCb = (val: { value: any, name: string }) => {
  itemFields.value[val.name] = val.value
  if (typeof updateValue === 'function') updateValue(itemFields.value)
}

const fieldInitCb = (val: { name: string, validateCb: (res: boolean) => void, resetCb: () => void }) => {
  if (typeof val.validateCb === 'function') validateCb[val.name] = val.validateCb
  if (typeof val.resetCb === 'function') resetCb[val.name] = val.resetCb
}

provide('form-item-init-cb', fieldInitCb)
provide('form-item-value-cb', fieldValueCb)
</script>

<template>
  <div :class="twMerge('flex box-border gap-1 flex-col', wrapClass)">
    <div v-if="label" :class="twMerge('text-base font-bold text-default-500 px-2 flex items-center')">{{ label }}</div>
    <div :class="twMerge('relative box-border flex flex-col flex-1', mainClass)">
      <slot/>
      <div :class="twMerge('w-full text-sm pl-2 text-danger-700', msgClass)">{{ message || '' }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>