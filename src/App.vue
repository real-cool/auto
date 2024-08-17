<script lang="ts" setup>
import {showNotify} from 'vant';
import {ref} from 'vue';
import Tabbar from "./components/Tabbar.vue";
import {TabbarItem} from "./utils/type.ts";

const tabs: TabbarItem[] = [
  {
    to: '/action',
    name: '基础操作',
    icon: 'action',
  },
  {
    to: '/taskTpl',
    name: '操作模板',
    icon: 'task-tpl',
  },
  {
    to: '/task',
    name: '任务列表',
    icon: 'tasking',
  },
];
const active = ref(0);

// 屏幕高度
const screenHeight = document.documentElement.clientHeight;
const offset = ref({y: screenHeight - 150, x: -1});

const onClickBubble = () => {
  // autox 震动
  $autox.callHandler('ExecScript', 'test', (data: string) => {
    // 接收参数
    showNotify({
      type: 'primary',
      message: '测试 ' + data,
      duration: 1000,
    })
  })
};

</script>

<template>
  <div class="overflow-hidden flex-col bg-gray-100 flex h-screen w-full justify-between">
    <div class="flex-1">
      <RouterView/>
    </div>
    <tabbar :data="tabs" v-model:active="active"/>
  </div>
</template>
<style>

.route-container {
  flex: 1;
}
</style>