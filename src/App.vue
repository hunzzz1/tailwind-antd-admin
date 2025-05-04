<script setup>
import {RouterView} from "vue-router";
const appToken = {
  "colorPrimary": "#030712",
  "wireframe": false,
  "colorPrimaryBg": "#e1e5ec",
  'fontSize':13,
}
</script>

<template>
  <a-config-provider :theme="{token: appToken} ">
    <RouterView/>
  </a-config-provider>
</template>

<style scoped>

</style>
