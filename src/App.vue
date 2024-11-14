<script setup lang="ts">
import { RouterView } from 'vue-router'
import { zhCN, dateZhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" class="h-full">
    <RouterView />
  </n-config-provider>
</template>

<style scoped></style>
