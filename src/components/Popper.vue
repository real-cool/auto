<script setup lang="ts">
import {PopperProps} from '../utils/type';
import {ref, watch} from "vue";

const props = defineProps<PopperProps>()
const emits = defineEmits(['update:show'])

const _show = ref(false)

const ref_dom = ref()
watch(() => props.show, v => _show.value = v)
watch(() => _show, v => emits('update:show', v))
const refWidth = ref(0)
function calculatePosition() {
  const isTab = document.getElementById('tabs-container')
  const refRect = ref_dom.value.getBoundingClientRect()
  refWidth.value = refRect.width
  if (isTab) {

  } else {

  }
  const {clientWidth, clientHeight, scrollTop, scrollLeft} = document.body
  console.log(clientWidth, clientHeight, scrollTop, scrollLeft)
}

function showPopper(e: Event) {
  _show.value = !_show.value
  if (_show.value) calculatePosition()
  e.stopPropagation()
}

</script>

<template>
  <div ref="ref_dom" @click="showPopper">
    <slot name="target"/>
  </div>
  <teleport to="#outer">
    <transition name="dropdown">
      <div v-if="_show" class="start overflow-hidden absolute top-0 left-0" :style="`${slotWidth && `width: ${refWidth}px`}`">
        <slot/>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.start {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  transform-origin: top;
  margin-top: 10px;
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from, .dropdown-leave-to {
  transform: translateY(-10px) scaleY(0);
  opacity: 0;
}
</style>