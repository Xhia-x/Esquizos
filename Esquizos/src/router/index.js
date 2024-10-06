import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginPage.vue'
import CrearPartida from '@/components/CrearPartida.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  {path: '/crearPartida', name: 'CrearPartida', component: CrearPartida}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
