<script setup lang="ts">
import {twMerge} from "tailwind-merge";
import moment from "moment";
import {loggerData} from "../utils/global.ts";

const colorClass = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  primary: 'text-primary',
  default: 'text-white'
}

 $autox.registerHandler("log", (data: string, _: (p: string)=> void) => {
  const [message, type] = data.split('|')
  //@ts-ignore
  loggerData.value.push({message, type, date: moment().format('YYYY-MM-DD HH:mm')})
})

</script>

<template>
  <div class="flex-1 flex flex-col bg-black  h-full box-border overflow-auto">
    <div v-for="item in loggerData" :key="item.date"
         :class="twMerge('box-border flex flex-col p-2 gap-1 log-item-border', colorClass[item.type || 'default'])">
      <div class="text-sb">{{ item.date }}</div>
      <div class="text-base">{{ item.message }}</div>
    </div>
  </div>
</template>

<style scoped>
.log-item-border {
  border-bottom: 1px solid #fffc72;
}
</style>