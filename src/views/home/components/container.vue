<script setup lang="ts">
import { render_all } from '@/com-tsx'
import { useCenter } from '@/hooks'

const { configList } = useCenter()

function Render(props) {
  return render_all[props.item.type](props.item)
}
</script>

<template>
  <div class="p-5">
    <div v-for="item in configList" :key="item.type">
      <Render :item />
    </div>
  </div>
</template>

<style scoped></style>
