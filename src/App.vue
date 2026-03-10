<script setup>
import {computed} from 'vue'
import {RouterView} from "vue-router";
import {themeConfig} from "@/theme.js";
import zh_CN from 'antdv-next/locale/zh_CN'
</script>

<template>


  <a-config-provider :theme="themeConfig" :locale="zh_CN">
    <RouterView/>
  </a-config-provider>
</template>

<style scoped>

</style>
