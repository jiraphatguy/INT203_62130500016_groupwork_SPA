import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'


const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
  {
    path : ''
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
