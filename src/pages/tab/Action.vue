<script lang="ts" setup>
import Button from "../../components/Button.vue";
import {clear_logger, open_logger, show_logger} from "../../utils/app_global.ts";
import Field from "../../components/form/Field.vue";
import Form from "../../components/form/Form.vue";
import FormItem from "../../components/form/FormItem.vue";
import {showToast} from "../../utils/global.ts";
import Selector from "../../components/form/Selector.vue";

let show = false

function logger() {
  show ? show_logger() : open_logger()
  show = true
}

</script>
<template>
  <div class="flex flex-row">
    <Button text="新增" @click="showToast('测试toast')"/>
    <Button text="清空日志" @click="clear_logger"/>
    <Button text="悬浮框" @click="logger"/>
  </div>
  <Form>
    <FormItem label="测试">
      <selector/>
    </FormItem>
    <FormItem label="测试">
      <Field/>
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