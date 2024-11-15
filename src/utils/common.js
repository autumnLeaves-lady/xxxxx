// 创建key值
export function createKey() {
  return `${+new Date()}_${Math.floor(Math.random() * 1000)}`
}
