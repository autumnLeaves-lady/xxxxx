const files = import.meta.glob('./*.tsx', { eager: true })
export const comListObj = {}
const names = []

Object.keys(files).forEach((key) => {
  const obj = files[key]?.default
  comListObj[obj.type] = obj
})
