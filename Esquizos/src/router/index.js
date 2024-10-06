import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginPage.vue'
import CrearPartida from '@/components/CrearPartida.vue'
import ConfigurarPartida from '@/components/ConfigurarPartida.vue'
import VerPartida from '@/components/VerPartida.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  {path: '/crearPartida', name: 'CrearPartida', component: CrearPartida},
  {path: '/configurarPartida', name: 'ConfigurarPartida', component: ConfigurarPartida},
  {path: '/partida/:nombrePartida', name: 'VerPartida', component: VerPartida}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
