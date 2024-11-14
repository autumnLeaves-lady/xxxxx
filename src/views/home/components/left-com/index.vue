<script setup lang="ts">
import { comList } from './config'
import { useDataCenterStore } from '@/stores/counter'

const { addConfigList } = useDataCenterStore()
function selectCom(item) {
  addConfigList(item)
}
</script>

<template>
  <n-space justify="space-around">
    <div
      v-for="(item, index) in comList"
      :key="index"
      class="w-28 h-7 leading-7 text-center bg-green-300 border cursor-pointer"
      @click="selectCom(item)"
    >
      {{ item.label }}
    </div>
  </n-space>
</template>

<style scoped></style>
