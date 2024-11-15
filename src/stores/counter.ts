import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataCenterStore = defineStore('data-center', () => {
  const configList = ref([])

  const activeCom = ref(null)

  function addConfigList(item) {
    configList.value.push(item)
    setActiveCom(item)
  }

  function setActiveCom(item) {
    activeCom.value = item
    console.log('activeCom.value: ', activeCom.value)
  }

  return { configList, addConfigList, activeCom, setActiveCom }
})
