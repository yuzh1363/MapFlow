import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routers/main_router'

// import './style.css'
import App from './App.vue'
import './assets/scss/button.css'
import './assets/scss/badge.css'
import './assets/scss/typography.css'
import './assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
