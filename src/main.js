import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

//importo vue-router
import { router } from './router';
createApp(App).use(router).mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import '@fortawesome/fontawesome-free/css/all.css'
