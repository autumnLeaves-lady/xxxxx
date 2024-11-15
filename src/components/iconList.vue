<script setup lang="ts">
import { useGlobal } from '@/hooks'

import * as icons from '@vicons/ionicons5'

// const { iconShow } = useGlobal()

const iconShow = ref(false)

const list = Object.keys(icons)
const showName = ref(true)
const current = defineModel('value')
</script>

<template>
  <n-input-group>
    <n-button v-if="current">
      <n-icon :size="20">
        <component :is="current" />
      </n-icon>
    </n-button>
    <n-input :value="current" readonly />
    <n-button type="primary" @click="iconShow = true">选择图标</n-button>
  </n-input-group>

  <n-modal
    v-model:show="iconShow"
    preset="card"
    :style="{ width: '70vw' }"
    title="选择图标"
    bordered
  >
    <div class="flex flex-col">
      <div style="margin-bottom: 8px">
        <span type="primary" size="small">回显图标名称：</span>
        <n-switch v-model:value="showName" size="small" />
      </div>
      <n-space :size="0" class="h-[84vh] overflow-auto">
        <div
          v-for="item in list"
          class="text-center m-1 p-1 border cursor-pointer every"
          :class="{ active: current === item }"
          @click="current = item"
        >
          <n-icon size="24">
            <component :is="item" />
          </n-icon>
          <div v-if="showName" class="text-xs">{{ item }}</div>
        </div>
      </n-space>
    </div>
  </n-modal>
</template>

<style scoped>
.every:hover {
  color: red;
  border-color: red;
}
.active {
  color: red;
  border-color: red;
}
</style>
