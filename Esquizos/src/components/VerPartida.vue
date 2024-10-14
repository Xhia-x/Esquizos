<template>
    <div v-if="partida">
      <h1>Partida: {{ partida.nombre }}</h1>
      <p>Número de jugadores: {{ partida.nJugadores }}</p>
      <p>Administrador: {{ partida.administrador }}</p>
      <button v-if="comprobarAdministrador()" type="button" class="finalizarPartidaBoton" @click="finalizarPartida">Finalizar Partida</button>
      <MonopolyView />
    </div>

  </template>
  
  <script>
  import axios from 'axios';
  import MonopolyView from '@/views/MonopolyView.vue';
  import { io } from 'socket.io-client'



  export default {
    name: 'VerPartida',
    components: {
      MonopolyView,
    },
    data() {
      return {
        partida: null,
        socket: null,
      };
    },
    created() {
      const nombrePartida = this.$route.params.nombrePartida;
      this.cargarPartida(nombrePartida);
      this.socket = io('http://localhost:9992');
      this.socket.on('partidaEliminada', (data) => {
        if (data && data.message) {
            alert(data.message);
            this.$router.push({ name: 'Home' }); // Redirigir a la página principal
        } else {
            console.error('Error: No se recibió el mensaje esperado', data);
        }
    });
    },
    beforeUnmount() {
      if (this.socket) {
        this.socket.disconnect();
      }
    },
    mounted() {
      const nombrePartida = this.$route.params.nombrePartida;
      this.socket.emit('joinPartida', nombrePartida);  // Join the game room
    },
    methods: {
      cargarPartida(nombrePartida) {
        axios.get(`http://localhost:9992/partida/${nombrePartida}`)
          .then(({ data }) => {
            this.partida = data;
          })
          .catch(err => {
            console.error(err);
            alert("Partida no encontrada");
            this.$router.push({ name: 'Home' });
          });
      },
      comprobarAdministrador() {
        if (!this.partida) return false; // Ensure partida is loaded
        const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
        return usuario && this.partida.administrador === usuario;
      },
      finalizarPartida() {
        if (this.socket) {
            this.socket.emit('finalizarPartida', { partida: this.partida.nombre });
        }
        axios.delete(`http://localhost:9992/partida/${this.partida.nombre}`)
          .then(() => {
              alert("Partida finalizada");
              this.$router.push({ name: 'Home' });
          })
          .catch(err => {
              console.error(err);
              alert("Error al finalizar la partida");
          });
       }

    }
  };
  </script>

  <style scoped>
  .finalizarPartidaBoton {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>

  