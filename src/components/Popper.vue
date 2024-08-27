<script setup lang="ts">
import {PopperProps} from '../utils/type';
import {Ref, ref, watch} from "vue";

const props = defineProps<PopperProps>()
const emits = defineEmits(['update:show'])

const _show = ref(false)

const ref_dom = ref()
watch(() => props.show, v => _show.value = v)
watch(() => _show, v => emits('update:show', v))
const refWidth = ref(0)
//@ts-ignore
const target: Ref<HTMLElement> = ref()
const inset = ref()
function calculatePosition() {
  const refRect = ref_dom.value.getBoundingClientRect()
  refWidth.value = refRect.width
  const {clientWidth, clientHeight, scrollTop, scrollLeft} = document.body
  const boolRight = target.value.clientWidth + refRect.left < clientWidth
  const boolBottom = target.value.clientHeight + 10 + refRect.bottom < clientHeight
  inset.value = `inset: ${boolBottom ? (refRect.bottom + 5 + scrollTop) : (refRect.top - 5 - target.value.clientHeight + scrollTop)}px auto auto ${boolRight ? (refRect.left + scrollLeft) : (refRect.right - target.value.clientWidth + scrollLeft)}px;`
}

function showPopper(e: Event) {
  _show.value = !_show.value
  if (_show.value) calculatePosition()
  e.stopPropagation()
}

</script>

<template>
  <div ref="ref_dom" @click.prevent="showPopper">
    <slot name="target"/>
  </div>
  <teleport :to="teleportTo || '#outer'">
    <transition name="dropdown">
      <div ref="target" v-show="_show" class="start overflow-hidden absolute shadow-md" :style="`${slotWidth && `width: ${refWidth}px;${inset}`}`">
        <slot/>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.start {
  background-color: #f9f9f9;
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