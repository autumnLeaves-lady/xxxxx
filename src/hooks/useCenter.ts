import { useDataCenterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

export function useCenter() {
  const dataCenterStore = useDataCenterStore()
  let { configList, activeCom } = storeToRefs(dataCenterStore)
  return {
    configList,
    activeCom,
    addConfigList: dataCenterStore.addConfigList,
    setActiveCom: dataCenterStore.setActiveCom,
  }
}
