import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataCenterStore = defineStore('data-center', () => {
  const configList = ref([])

  function addConfigList(item) {
    configList.value.push(item)
  }

  return { configList, addConfigList }
})
