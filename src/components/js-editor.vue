<script setup lang="ts">
import AceEditor from '@/components/ace-editor.vue'

const show = ref(false)
function init() {}
</script>

<template>
  <n-button @click="show = true">编写代码</n-button>
  <n-modal
    v-model:show="show"
    preset="card"
    :style="{ width: '70vw' }"
    title="编写代码"
    bordered
    @after-enter="init"
  >
    <AceEditor></AceEditor>
  </n-modal>
</template>
