import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginPage.vue';
import LevelSelector from '../components/LevelSelector.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/level-selector', name: 'LevelSelector', component: LevelSelector }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
