<script setup lang="ts">
import Container from './components/container.vue'
import LeftCom from './components/left-com/index.vue'
import RightProp from './components/right-prop.vue'
</script>

<template>
  <div class="h-full grid grid-cols-[auto,1fr,auto]">
    <div class="w-64 border-r p-2">
      <LeftCom />
    </div>
    <div class="border-r"><Container /></div>
    <div class="w-96"><RightProp /></div>
  </div>
</template>

<style scoped></style>
