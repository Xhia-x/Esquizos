import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginPage.vue'
import CrearPartida from '@/components/CrearPartida.vue'
import VerPartida from '@/components/VerPartida.vue'
import LevelSelector from '../components/LevelSelector.vue';
import Ficha from '@/components/Ficha.vue';
import Home from '@/components/Home.vue'
import MonopolyView from '@/views/MonopolyView.vue';
import MonopolyView2 from '@/views/MonopolyView2.vue';
import PartidasCreadas from '@/components/PartidasCreadas.vue';
import FigurasMonopoly from '@/views/FigurasMonopoly.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  {path: '/crearPartida', name: 'CrearPartida', component: CrearPartida},
  {path: '/partida/:nombrePartida', name: 'VerPartida', component: VerPartida},
  {path: '/level-selector', name: 'LevelSelector', component: LevelSelector },
  {path: '/fichas', name: 'Ficha', component: Ficha},
  {path: '/home', name: 'Home', component: Home},
  {path: '/monopolyView', name: 'MonopolyView', component: MonopolyView},
  {path: '/monopolyView2', name: 'MonopolyView2', component: MonopolyView2},
  {path: '/partidasCreadas', name: 'PartidasCreadas', component: PartidasCreadas},
  {path: '/figurasMonopoly', name: 'FigurasMonopoly', component: FigurasMonopoly},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
