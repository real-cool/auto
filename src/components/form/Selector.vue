<script setup lang="ts">

import Field from "./Field.vue";
import Popper from "../Popper.vue";
import {computed, ref, watch} from "vue";
import {SelectorProps} from "../../utils/type.ts";
import {tpl2str} from "../../utils/rc.ts";

const props = defineProps<SelectorProps>()
const emits = defineEmits(['change', 'update:value', 'clear'])
const show = ref(false)
const _data = computed(() => (props.data || []).map(it => ({
  ...it,
  _name: tpl2str((props.tpl && props.tpl[1]) || 'name', it),
  _id: tpl2str((props.tpl && props.tpl[0]) || 'id', it),
})))
const item = computed(() => _data.value.find(it => it._id == _value.value))
const _value = ref(props.value)

const label = ref()
watch(item, v => {
  label.value = v?._name
}, {deep: true, immediate: true})

function change(it: Record<string, any>) {
  _value.value = it._id
  show.value = false
  emits('update:value', _value.value)
  emits('change', _value.value)
}

function clear() {
  _value.value = null
  emits('update:value', _value.value)
  emits('clear', _value.value)
  emits('change', _value.value)
}
</script>

<template>
  <popper v-model:show="show" slot-width>
    <template v-slot:default>
      <div v-for="it in _data" :key="it._id" :class="_value == it._id? 'text-base flex items-center px-3 py-1 hover:bg-opacity-50 bg-primary bg-opacity-70 text-white' : 'text-base flex items-center bg-gray-100 px-3 py-1 hover:bg-opacity-30'" @click="change(it)">{{ it._name }}
      </div>
    </template>
    <template v-slot:target>
      <field readonly :name="name" :placeholder="placeholder" :wrap-class="wrapClass" :input-class="inputClass"
             v-model:value="label" :front-icon="frontIcon" :end-icon="endIcon || {icon: 'right', size: 'sa'}" @clear="clear"/>
    </template>
  </popper>

</template>

<style scoped>

</style>