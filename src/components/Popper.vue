<script setup lang="ts">
import {PopperProps} from '../utils/type';
import {onBeforeUnmount, onMounted, Ref, ref, watch} from "vue";

const props = defineProps<PopperProps>()
const emits = defineEmits(['update:show'])

const _show = ref(false)

const ref_dom = ref()
watch(() => props.show, v => _show.value = v, {immediate: true})
watch(_show, v => emits('update:show', v))
const refWidth = ref(0)
//@ts-ignore
const target: Ref<HTMLElement> = ref()
const inset = ref()
function calculatePosition() {
  const refRect = ref_dom.value.getBoundingClientRect()
  refWidth.value = refRect.width
  const {clientWidth, clientHeight, scrollTop, scrollLeft} = document.querySelector('#app-frame') as HTMLElement
  const boolRight = target.value.clientWidth + refRect.left < clientWidth
  const boolBottom = target.value.clientHeight + (Number(props.offsetY) || 0) + refRect.bottom < clientHeight
  inset.value = `inset: ${boolBottom ? (refRect.bottom + (Number(props.offsetY) || 0) + scrollTop) : (refRect.top - (Number(props.offsetY) || 0) - target.value.clientHeight + scrollTop)}px auto auto ${boolRight ? (refRect.left + scrollLeft) : (refRect.right - target.value.clientWidth + scrollLeft)}px;`
}

function showPopper(e: Event) {
  _show.value = !_show.value
  if (_show.value) calculatePosition()
  e.stopPropagation()
}

function handleClickOutSide(e) {
  if (target.value && !target.value.contains(e.target)) {
    _show.value = false
  }
}

onMounted(()=> {
  addEventListener('click', handleClickOutSide)
})

onBeforeUnmount(()=> {
  removeEventListener('click', handleClickOutSide)
})

</script>

<template>
  <div ref="ref_dom" @click.prevent="showPopper">
    <slot name="target"/>
  </div>
  <teleport :to="teleportTo || '#outer'">
    <transition name="dropdown">
      <div ref="target" v-show="_show" class="start overflow-hidden absolute shadow-md text-base" :style="`${slotWidth && `width: ${refWidth}px;${inset}`}`">
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
  transform: translateY(-5px) scaleY(0);
  opacity: 0;
}
</style>