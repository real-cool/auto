<script setup lang="ts">
import {TabbarItem} from "../utils/type";
import {computed} from "vue";
import Icon from "./Icon.vue";
import {twMerge} from "tailwind-merge";

const props = defineProps({
  data: Array<TabbarItem>,
  active: {
    type: [Number, String],
    default: 0
  }
});
const emits = defineEmits(['update:active', 'change']);
const ai = computed({get: () => props.active, set: v => emits('update:active', v)})

function tabClick(item: TabbarItem, index: number) {
  ai.value = index
  item.to
  emits('change', index)
}
</script>

<template>
  <div class="flex flex-row w-full h-14 text-base bg-white shadow-lg">
    <router-link class="h-full flex-1" :to="item.to" v-for="(item, i) in data" :key="item.name">
      <div :key="item.name" :class="twMerge('h-full w-full flex flex-col gap-1 items-center justify-center', ai === i && 'text-primary')" @click="tabClick(item, i)">
        <icon size="md" :icon="item.icon"/>
        <span>{{ item.name }}</span>
      </div>
    </router-link>
  </div>
</template>