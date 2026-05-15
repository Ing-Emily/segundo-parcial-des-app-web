// main.js — SalMendra
// Punto de entrada de la aplicación Vue 3

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Estilos globales del proyecto (único archivo CSS)
import './style.css'

createApp(App).use(router).mount('#app')