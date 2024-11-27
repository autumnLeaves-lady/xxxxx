<script setup lang="ts">
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/mode-text'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-searchbox'
import 'ace-builds/src-noconflict/ext-beautify'
import 'ace-builds/src-noconflict/ext-code_lens'
import 'ace-builds/src-noconflict/ext-error_marker'
import 'ace-builds/src-noconflict/ext-command_bar'

import 'ace-builds/src-noconflict/ext-emmet'
import 'ace-builds/src-noconflict/ext-elastic_tabstops_lite'
import 'ace-builds/src-noconflict/ext-hardwrap'
import 'ace-builds/src-noconflict/ext-inline_autocomplete'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-keybinding_menu'
import 'ace-builds/src-noconflict/ext-spellcheck'

// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'
// import 'ace-builds/src-noconflict/ext'

import type { Ace } from 'ace-builds'

const props = withDefaults(
  defineProps<{
    value: string
  }>(),
  {
    value: '',
  },
)

const newValue = defineModel<string>('value', {
  default: '',
})

let editor = null
const editorform = ref(null)

let options: Ace.EditorOptions = {
  theme: 'ace/theme/monokai', // 主题
  mode: 'ace/mode/javascript', // 代码匹配模式
  tabSize: 2, //标签大小
  fontSize: 14, //设置字号
  wrap: true, // 自动换行
  enableSnippets: true, // 启用代码段
  showLineNumbers: true, // 显示行号
  showGutter: true, // 显示行号
  enableLiveAutocompletion: true, // 启用实时自动完成功能 （比如：智能代码提示）
  enableBasicAutocompletion: true, // 启用基本自动完成功能
  scrollPastEnd: true, // 滚动位置
  highlightActiveLine: true, // 高亮当前行,
  userWorker: true,
}
import workerJs from 'ace-builds/src-noconflict/worker-javascript?url'
function init() {
  if (editor) {
    //实例销毁
    editor.destroy()
  }

  //初始化
  editor = ace.edit(editorform.value, options)
  editor.getSession().setUseWorker(true)
  ace.config.setModuleUrl('ace/mode/javascript_worker', workerJs)

  editor.setValue(newValue.value ? newValue.value : '') // 设置内容
  editor.on('change', () => {
    newValue.value = editor.getValue()
    console.log('newValue.value: ', [newValue.value])
  })
}

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  editor.destroy()
  editor.container.remove()
})

function fun() {
  const marker = {
    startRow: 1,
    startCol: 0,
    endRow: 3,
    endCol: 1,
    type: 'error',
    text: `错误信息错误新`,
  }

  editor.session.addMarker(
    new ace.Range(marker.startRow, marker.startCol, marker.endRow, marker.endCol),
    'ace_error',
    'fullLine',
    true,
  )
  console.log('执行---------')
}
</script>

<template>
  <div ref="editorform" style="height: 250px"></div>
  <n-button @click="fun">aaa</n-button>
</template>

<style>
/* @import '~ace-builds/css/ace.css'; */
</style>
