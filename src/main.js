import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import AmosUI from '../src/AmosComponents'

const app = createApp(App)
app.use(AmosUI)
app.use(ElementPlus)
app.mount('#app')
