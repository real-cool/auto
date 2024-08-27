<script setup lang="ts">
import {provide, ref, Ref} from "vue";
import {FormExpose, FormProps} from "../../utils/type.ts";
import {twMerge} from "tailwind-merge";

const props = defineProps<FormProps>()
const emits = defineEmits(['update:value', 'change'])
const formClass = {
  'sm': 'xl:grid-cols-3 md:grid-cols-2',
  'md': 'md:grid-cols-2',
  'lg': ''
}

const fields: Ref<Record<string, any>[]> = ref([])
const _value = ref(props.value || {})
const updateValue = (v: Record<string, any>) => {
  const new_val = {..._value.value, ...v}
  if (_value.value.hasOwnProperty(Object.keys(v)[0])) {
    emits('update:value', new_val)
    emits('change', new_val)
  }
  _value.value = new_val
}

const addFieldCb = (field: Record<string, any>) => {
  fields.value.push(field)
}
provide('form-rules', props.rules)
provide('form-field', addFieldCb)
provide('form-update-value', updateValue)
provide('form-theme', props.theme)
defineExpose<FormExpose>({
  resetFields() {
    fields.value.forEach((f) => {
      f.resetField()
    })
  },
  validate() {
    let res = true
    for (let i in fields.value) {
      if (!fields.value[i].validateField()) res = false
    }
    return res
  }
})
</script>

<template>
  <div :class="twMerge('p-2 ', theme === 'dark' ? 'bg-default-500': '')">
    <form @submit.prevent
          :class="twMerge('grid rounded-sm box-border gap-x-12 gap-y-2 my-2 overflow-hidden', formClass[size || 'sm'],wrapClass)">
      <slot/>
    </form>
  </div>
</template>

<style scoped>

</style>