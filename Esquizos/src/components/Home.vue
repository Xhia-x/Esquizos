<template>
  <body>
      <div class="container vh-100 d-flex justify-content-center align-items-center">
          <div class="card shadow p-4 col-md-4">
              <h2 class="text-primary mb-4">Home</h2>
              <h3 class="text-center">Bienvenido, {{ username }}</h3> <!-- Agregar esta línea -->
              <div class="d-flex justify-content-between">
                  <button class="btn btn-danger me-2" onclick="location.href='/crearPartida'">Crear partida</button>
                  <button class="btn btn-danger">Unirse a partida</button>
                  <button class="btn btn-danger" @click="cerrarSesion">Cerrar sesión</button>
              </div>
          </div>
      </div>
  </body>
  </template>



<script>
import autenticadorSesion from '../mixins/AutenticadorSesion.js';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  mixins: [autenticadorSesion],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: ''
    }
  },
  methods: {
    cerrarSesion () {
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      this.$router.push('/');
    }
  },
  mounted() {
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (storedUser) {
        this.username = storedUser;
    }
}
}
</script>



<style scoped>


body {
  background: none;
  position: relative;
}

.card {
  position: relative;
  border-radius: 8px;
}

.text-primary {
  color: red !important;
}

.btn{
  background-color: red;
  margin: 10%;
}

video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
    z-index: -210;
    object-fit: cover;
  }

</style>

