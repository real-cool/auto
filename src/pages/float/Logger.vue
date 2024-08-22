<script setup lang="ts">
import {twMerge} from "tailwind-merge";
import moment from "moment";
import {copyText, loggerData} from "../../utils/float_global.ts";

const colorClass = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  primary: 'text-primary',
  default: 'text-white'
}

$autox.registerHandler("log", (data: string, _: (p: string) => void) => {
  const [message, type] = data.split('|')
  const d = new Date()
  //@ts-ignore
  loggerData.value.unshift({message, type, date: d, id: d.getTime()})
})

$autox.registerHandler("clear_log", () => {
  loggerData.value = []
})
</script>

<template>
  <div class="flex-1 flex flex-col bg-black h-full w-full min-h-screen box-border overflow-auto">
    <div v-for="item in loggerData" :key="item.id"
         :class="twMerge('box-border w-screen flex flex-col p-2 gap-1 log-item-border', colorClass[item.type || 'default'])">
      <div class="text-sb">{{ moment(item.date).format("YYYY-MM-DD HH:mm:ss") }}</div>
      <div class="text-base box-border break-words" @click="copyText">
        {{ item.message }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.log-item-border {
  border-bottom: 1px solid #fffc72;
}
</style>