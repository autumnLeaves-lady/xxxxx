const files = import.meta.glob('./*.tsx', { eager: true })
export const comListObj = {}
const names = []

export const jsonData_all = {}
export const propsConfig_all = {}
export const render_all = {}

Object.keys(files).forEach((key) => {
  const type = files[key]?.jsonData.type
  jsonData_all[type] = files[key].jsonData
  propsConfig_all[type] = files[key].propsConfig
  render_all[type] = files[key].render
})
