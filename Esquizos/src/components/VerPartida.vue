<template>
    <div>
      <h1>Partida: {{ partida.nombre }}</h1>
      <p>Número de jugadores: {{ partida.nJugadores }}</p>
      <p>Administrador: {{ partida.administrador }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'VerPartida',
    data() {
      return {
        partida: null,
      };
    },
    created() {
      const nombrePartida = this.$route.params.nombrePartida;
      this.cargarPartida(nombrePartida);
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
          });
      }
    }
  };
  </script>
  