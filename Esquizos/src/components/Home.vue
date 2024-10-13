<template>
  <body>

    <div class="botonReglas">
        <Reglas>
           
        </Reglas>
        </div>
    <div class="d-flex justify-content-start">
      <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Bienvenido, {{ username }}
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Algo</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" @click="cerrarSesion">Cerrar sesión</a></li>
          <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#invitacionesModal">Invitaciones</a></li>
        </ul>
  
      </div>
    </div>
    <div class="container vh-100 d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <a href="/crearPartida" class="link-offset-2 link-underline link-underline-opacity-0">
            <div class="card shadow p-4 col-md-4">
              <img class="img-thumbnail" src="https://ae01.alicdn.com/kf/S40076f46e889430794c308a68f8bccd7a/P-ster-de-dibujos-animados-Mr-Monopoly-Big-Rich-Man-pintura-en-lienzo-dinero-arte-de.jpg">
              <h2>Crear partida</h2>
            </div>
          </a>
          <a class="link-offset-2 link-underline link-underline-opacity-0">
            <div class="card shadow p-4 col-md-4">
              <img class="img-thumbnail" src="https://ae01.alicdn.com/kf/S5647db58d8c6430786562d968f2e9348E/P-ster-de-dibujos-animados-Mr-Monopoly-Big-Rich-Man-pintura-en-lienzo-dinero-arte-de.jpg">
              <h2>Unirse a partida</h2>
            </div>
          </a>
        </div>
        <a href="/partidasCreadas" class="link-offset-2 link-underline link-underline-opacity-0">
            <div class="card shadow p-4 col-md-4">
              <img class="img-thumbnail" src="https://ae01.alicdn.com/kf/S40076f46e889430794c308a68f8bccd7a/P-ster-de-dibujos-animados-Mr-Monopoly-Big-Rich-Man-pintura-en-lienzo-dinero-arte-de.jpg">
              <h2>Ver Partidas creadas</h2>
            </div>
          </a>
    </div>

    <VistaInvitaciones />
  </body>
  </template>



<script>
import autenticadorSesion from '../mixins/AutenticadorSesion.js';
import VistaInvitaciones from './VistaInvitaciones.vue';
import PopUp from './PopUp.vue';
import Reglas from './Reglas.vue';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    VistaInvitaciones
  },
  mixins: [autenticadorSesion],
  components: {
    PopUp,
    Reglas
  },
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


.d-flex{
  margin-bottom: 2%;
}

.btn-group{
  align-self: flex-end;
  margin-bottom: 0;
}

.a{
  margin: 20%;
  margin-top: 0;
  align-self: center;
}


.card:hover {filter: sepia(40%);}

.img {
    width: 10%;
    height: auto;
}

body {
  background: none;
  position: relative;
}

.card{
  transition:0.5s;
  margin-top: 0;
  cursor:pointer;
  margin: auto;
  width: 56%;
  height: auto;
}
.card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
}
.card-title i{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg); 
  color:#18d4ca;
  
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px;  
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}

.text-primary {
  color: red !important;
}

.btn{
  background-color: red;
  position: absolute;
  top: 0;
  right: -1500px;
  margin: 10px;
}

.botonReglas{
  position: absolute;
  top: 10px;
  left: 10px; /* Cambiado de right a left */
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
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

