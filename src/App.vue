<script lang="ts" setup>

</script>

<template>
  <div id="app-frame" class="h-screen overflow-auto relative">
    <RouterView/>
    <div id="outer"></div>
  </div>
</template>

<style scoped>
#outer {
  position: absolute;
  top: 0;
}
</style>