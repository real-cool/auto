<script setup lang="ts">

import {TabbarItem} from "../utils/type.ts";
import Action from "./tab/Action.vue";
import ActionTpl from "./tab/ActionTpl.vue";
import Tasking from './tab/Tasking.vue'
import TabInnerPage from "../components/TabInnerPage.vue";
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
</script>

<template>
  <tab-inner-page :tabs="tabs"/>
</template>

<style scoped>

</style>