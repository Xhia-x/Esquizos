import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import Tablero from '@/views/tablero.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/tablero',
      name: 'tablero',
      component: Tablero
    },
  ]
})



export default router
