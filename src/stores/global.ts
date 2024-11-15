import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const iconShow = ref(false)

  function setIconShow(bool: boolean) {
    iconShow.value = bool
  }

  return { iconShow, setIconShow }
})
