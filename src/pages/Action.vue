<script lang="ts" setup>
import {BaseAction} from "../utils/type.ts";

const actions: BaseAction[] = [
  {
    id: 1, name: '启动指定app', action: p => {
      console.log(p)
    }
  }
]

</script>
<template>
<div></div>
</template>