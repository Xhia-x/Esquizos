import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginPage.vue';
import LevelSelector from '../components/LevelSelector.vue';
import Ficha from '@/components/Ficha.vue';


const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/level-selector', name: 'LevelSelector', component: LevelSelector },
  {path: '/fichas', name: 'Ficha', component: Ficha}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
