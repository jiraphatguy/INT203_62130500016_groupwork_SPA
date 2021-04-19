import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import Album from '../views/Album.vue'

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
    path: '/album',
    name: 'Album',
    component: Album
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
