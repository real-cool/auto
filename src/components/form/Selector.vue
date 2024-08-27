<script setup lang="ts">

import Field from "./Field.vue";
import Popper from "../Popper.vue";
import {ref} from "vue";
const show = ref(false)
</script>

<template>
  <popper v-model:show="show" slot-width>
    <template v-slot:default>
      内容
    </template>
    <template v-slot:target>
      <field readonly/>
    </template>
  </popper>

</template>

<style scoped>

</style>