<script setup lang="ts">
import { useDataCenterStore } from '@/stores/counter'
import { comListObj } from '@/com-tsx'
console.log('comListObj: ', comListObj)

const { configList } = useDataCenterStore()

function Render(props) {
  return comListObj[props.item.type].render()
}
</script>

<template>
  <div>
    <div v-for="item in configList" :key="item.type">
      <Render :item />
    </div>
  </div>
</template>

<style scoped></style>
