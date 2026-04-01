import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import './style.css'
import App from './App.vue'
import './assets/scss/button.css'
import './assets/scss/badge.css'
import './assets/scss/typography.css'
import './assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
