import { useGlobalStore } from '@/stores/global'
import { storeToRefs } from 'pinia'

export function useGlobal() {
  const globalStore = useGlobalStore()
  let { iconShow } = storeToRefs(globalStore)

  return {
    iconShow,
    setIconShow: globalStore.setIconShow,
  }
}
