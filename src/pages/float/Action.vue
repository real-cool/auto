<script setup lang="ts">

/*import Button from "../../components/Button.vue";
import {exec_fun, success_log} from "../../utils/float_global.ts";

function openRcAutox() {
  exec_fun('LaunchApp', '心悦俱乐部');
}

function click_point() {
  exec_fun('ClickPoint', '100:200');
}

function ocr_test() {
  exec_fun('MLKitOcr', '', (res) => {
    const res_data = JSON.parse(res);
    success_log("识别文字数组长度:" + res_data.length)
    success_log(`识别的文字有: ${res_data.map(item => item.text).join('----')}`)
  });
}*/
import Form from "../../components/form/Form.vue";
import FormItem from "../../components/form/FormItem.vue";
import Field from "../../components/form/Field.vue";
</script>

<template>
<!--  <div class="flex flex-col h-screen text-base">
    <div>悬浮窗的功能页</div>
    <Button size="sm" text="打开rcautox" @click="openRcAutox"/>
    <Button size="sm" text="点击100,200" @click="click_point"/>
    <Button size="sm" text="截图ocr测试" @click="ocr_test"/>
  </div>-->
  <div class="flex flex-col w-full px-2 h-screen bg-gray-100">
    <Form>
      <FormItem label="测试">
        <Field/>
      </FormItem>
    </Form>
  </div>
</template>

<style scoped>

</style>