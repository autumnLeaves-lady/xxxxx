import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as icons from '@vicons/ionicons5'

const app = createApp(App)

// 全局注册所有图标
Object.entries(icons).forEach(([key, component]) => {
  app.component(key, component)
})

app.use(createPinia())
app.use(router)

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
