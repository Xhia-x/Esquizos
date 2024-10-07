import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginPage.vue'
import CrearPartida from '@/components/CrearPartida.vue'
import ConfigurarPartida from '@/components/ConfigurarPartida.vue'
import VerPartida from '@/components/VerPartida.vue'
import LevelSelector from '../components/LevelSelector.vue';
import Ficha from '@/components/Ficha.vue';
import Home from '@/components/Home.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  {path: '/crearPartida', name: 'CrearPartida', component: CrearPartida},
  {path: '/configurarPartida', name: 'ConfigurarPartida', component: ConfigurarPartida},
  {path: '/partida/:nombrePartida', name: 'VerPartida', component: VerPartida},
  {path: '/level-selector', name: 'LevelSelector', component: LevelSelector },
  {path: '/fichas', name: 'Ficha', component: Ficha},
  {path: '/home', name: 'Home', component: Home}
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
