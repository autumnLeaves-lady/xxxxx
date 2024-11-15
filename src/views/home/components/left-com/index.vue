<script setup lang="ts">
import { comList } from './config'
import { useCenter } from '@/hooks'
import { jsonData_all } from '@/com-tsx'
import { cloneDeep } from 'lodash-es'
import { createKey } from '@/utils/common'

const { addConfigList } = useCenter()

function selectCom(item) {
  if (jsonData_all[item.type]) {
    const json = cloneDeep(jsonData_all[item.type])
    json.props._id = createKey()
    addConfigList(json)
  }
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
