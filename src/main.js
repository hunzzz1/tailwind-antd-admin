import { createApp } from 'vue';
import './styles/base.css'
import './styles/table.css'

import router from './router'
import { createPinia } from 'pinia'
import '@/permission.js'
import App from './App.vue'
const app = createApp(App);

app.use(createPinia())
app.use(router)
app.mount('#app')

