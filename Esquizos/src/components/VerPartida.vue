<template>
    <div v-if="partida">
      <h1>Partida: {{ partida.nombre }}</h1>
      <p>Número de jugadores: {{ partida.nJugadores }}</p>
      <p>Administrador: {{ partida.administrador }}</p>
      <ul>
        <li v-for="jugador in partida.jugadores" :key="jugador">{{ jugador }}</li>
      </ul>
      <button v-if="comprobarAdministrador()" type="button" class="finalizarPartidaBoton" @click="finalizarPartida">Finalizar Partida</button>
      <button type="button" class="volverHomeBoton" @click="volverHome">Volver al inicio</button>
      <MonopolyView />
    </div>

  </template>
  
  <script>
  import axios from 'axios';
  import MonopolyView from '@/views/MonopolyView.vue';
  import { io } from 'socket.io-client'
  import Swal from 'sweetalert2';

  export default {
    name: 'VerPartida',
    components: {
      MonopolyView,
    },
    data() {
      return {
        partida: null,
        socket: null,
        nombrePartida: this.$route.params.nombrePartida,
        isPlayerLeft: false,
      };
    },
    created() {
      this.cargarPartida(this.nombrePartida);
      this.iniciarSocket();
    },
    beforeUnmount() {
      if (this.socket) {
        this.socket.disconnect();
      }
    },
    mounted() {
      this.socket.emit('joinPartida', this.nombrePartida);  // Join the game room
    },
    methods: {
      cargarPartida(nombrePartida) {
        axios.get(`http://localhost:9992/partida/${nombrePartida}`)
          .then(({ data }) => {
            this.partida = data;
            console.log(this.partida.jugadores);
            const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
            if (this.partida != null && !this.partida.jugadores.includes(usuario)) {
              if(this.partida.jugadores.length >= this.partida.nJugadores){
                alert("La partida está llena");
                this.$router.push({ name: 'Home' });
                return;
              }
              this.alertaInvitacionPartida(usuario, nombrePartida);
              return;
            }
            localStorage.setItem('partida',  JSON.stringify({nombre: nombrePartida, usuario: usuario}));
          })
          .catch(err => {
            console.error(err);
            alert("Partida no encontrada");
            this.$router.push({ name: 'Home' });
          });
      },
      iniciarSocket() {
        this.socket = io('http://localhost:9992');

        // Unirse a la partida al conectarse
        this.socket.on('connect', () => {
          this.socket.emit('joinPartida', this.nombrePartida);
        });

        this.socket.on('partidaEliminada', (data) => {
          if (data && data.message) {
            alert(data.message);
            localStorage.removeItem('partida');
            this.$router.push({ name: 'Home' }); 
          } else {
            console.error('Error: No se recibió el mensaje esperado', data);
          }
        });

        this.socket.on('disconnect', () => {
          console.log('Desconectado del servidor.');
          this.isPlayerLeft = true; // Mark player as left
        });

        this.socket.on('reconnect', () => {
          console.log('Reconectado al servidor.');
          this.socket.emit('joinPartida', this.nombrePartida); // Rejoin the game room
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
       },
       alertaInvitacionPartida(usuario, nombrePartida) {
          Swal.fire({
            title: "No estás en la partida",
            text: "¿Deseas unirte a la partida?",
            showCancelButton: true,
            confirmButtonColor: "#26a042",
            cancelButtonColor: "#d33",
            confirmButtonText: "Unirme"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Has sido a la partida!",
                text: "¡Ahora puedes jugar!",
                icon: "success"
              });
              this.partida.jugadores.push(usuario);
              axios.put(`http://localhost:9992/partida/${nombrePartida}`, this.partida)
                .then(() => {
                  console.log("Jugador añadido a la partida");
                })
                .catch(err => {
                  console.error(err);
                });
              }

            else{
              this.$router.push({ name: 'Home' });
            }
          });
       },
      volverHome() {        
        this.$router.push({ name: 'Home' }); // Redirigir al inicio
      },
      rejoinGame() {
        const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (usuario && this.partida.jugadores.length < this.partida.nJugadores) {
          this.socket.emit('joinPartida', this.nombrePartida);
          this.isPlayerLeft = false; // Mark player as back in the game
          this.partida.jugadores.push(usuario); // Re-add the user to the player list
          alert("Te has reunido a la partida!");
        } else {
          alert("No puedes unirte a la partida.");
        }
      },

    }
  };
  </script>

  <style scoped>
  .finalizarPartidaBoton {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .volverHomeBoton {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  </style>

  