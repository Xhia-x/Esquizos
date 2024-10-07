import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginPage.vue';
import LevelSelector from '../components/LevelSelector.vue';
import Ficha from '@/components/Ficha.vue';
import MonopolyView from '@/views/tablero.vue';



const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/level-selector', name: 'LevelSelector', component: LevelSelector },
  { path: '/fichas', name: 'Ficha', component: Ficha},
  { path: '/tablero', name: 'Tablero', component: MonopolyView}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
