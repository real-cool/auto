<script lang="ts" setup>
import Button from "../../components/Button.vue";
import {clear_logger, open_logger, show_logger} from "../../utils/app_global.ts";
import Form from "../../components/form/Form.vue";
import FormItem from "../../components/form/FormItem.vue";
import {showToast} from "../../utils/global.ts";
import Selector from "../../components/form/Selector.vue";
import {ref} from "vue";

let show = false

const test_data = ref([
  {id: 1, name: '报告1'},
  {id: 2, name: '报告2'},
  {id: 3, name: '报告3'},
  {id: 4, name: '报告4'},
  {id: 5, name: '报告5'},
  {id: 6, name: '报告6'},
])
function logger() {
  show ? show_logger() : open_logger()
  show = true
}
const model = ref()
function change() {
  console.log(model.value)
}
</script>
<template>
  <div class="flex flex-row">
    <Button text="新增" @click="showToast('测试toast')"/>
    <Button text="清空日志" @click="clear_logger"/>
    <Button text="悬浮框" @click="logger"/>
  </div>
  <Form v-model:value="model" @change="change">
    <FormItem label="测试">
      <selector name="test" :data="test_data" value="2"/>
    </FormItem>
    <FormItem label="测试">
      <selector name="test1" :data="test_data" value="2"/>
    </FormItem>
    <FormItem label="测试">
      <selector name="test2" :data="test_data" value="2"/>
    </FormItem>
  </Form>

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