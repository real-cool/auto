<script lang="ts" setup>
import Popper from "../../components/Popper.vue";
import Button from "../../components/Button.vue";
import {exec_script, success_log} from "../../utils/global.ts";

function showLogs() {
  exec_script('test')
}
success_log('进入基础操作页面')
</script>
<template>
  <div @click="showLogs">测试页面</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <Popper>
    <template v-slot:target>
      <Button text="测试"/>
    </template>
    <template v-slot:default>
      内容撒翻跟斗翻跟斗施工方
    </template>
  </Popper>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
  <div>内容</div>
</template>