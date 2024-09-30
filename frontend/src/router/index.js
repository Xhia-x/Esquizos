import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    
    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})