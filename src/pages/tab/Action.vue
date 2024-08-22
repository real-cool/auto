<script lang="ts" setup>
import Popper from "../../components/Popper.vue";
import Button from "../../components/Button.vue";
import {clear_logger, exec_script, open_logger, show_logger, success_log} from "../../utils/app_global.ts";

let show = false
function logger() {
  show ? show_logger(): open_logger()
  show = true
}

function ocrTest() {
  exec_script('ocr_demo')
}

function addLog() {
  success_log('添加一条成功日志')
}
</script>
<template>
  <Button text="新增"/>
<!--  <div class="h-2"/>
  <Button @click="logger" text="打开悬浮窗"/>
  <Button @click="clear_logger" text="清空日志"/>
  <Button @click="ocrTest" text="ocr测试"/>
  <Button @click="addLog" text="添加日志"/>
  <Popper>
    <template v-slot:target>
      <Button text="popper测试"/>
    </template>
    <template v-slot:default>
      下拉框内容
    </template>
  </Popper>
  <van-field/>-->
</template>