import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Nav from './components/Nav.vue'

createApp(App).component("Navbar", Nav).use(router).mount('#app')