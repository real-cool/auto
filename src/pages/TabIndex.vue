<script setup lang="ts">

import {TabbarItem} from "../utils/type.ts";
import Tabbar from "../components/Tabbar.vue";
import Action from "./tab/Action.vue";
import ActionTpl from "./tab/ActionTpl.vue";
import Tasking from './tab/Tasking.vue'
import {ref} from "vue";
const tabs: TabbarItem[] = [
  {
    to: Action,
    name: '基础操作',
    icon: 'action',
  },
  {
    to: ActionTpl,
    name: '操作模板',
    icon: 'task-tpl',
  },
  {
    to: Tasking,
    name: '任务列表',
    icon: 'tasking',
  },
];

const active = ref(0);
</script>

<template>
<div class="flex flex-col h-screen bg-gray-100">
  <div id="tabs-container" class="flex-1 overflow-auto">
    <component :is="tabs[active].to"/>
  </div>
  <tabbar :data="tabs" v-model:active="active"/>
</div>
</template>

<style scoped>

</style>