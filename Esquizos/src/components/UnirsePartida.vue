<template>
    <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
    <div class="partidas-container">
        <h1>Partidas Unidas</h1>
        <ul class="lista-partidas">
            <li v-for="partida in partidas" :key="partida.nombre" class="partida-item">
                <h2>{{ partida.nombre }}</h2>
                <p>Número de jugadores: {{ partida.nJugadores }}</p>
                <button @click="accederPartida(partida.nombre)">Acceder a la partida</button>
            </li>
        </ul>
    </div>
    <button type="button" class="volverAtrasBoton" @click="volverAtras">volver atrás</button>
</template>

<script>

import axios from "axios";
import autenticadorSesion from '../mixins/AutenticadorSesion.js';
import Partida from '../models/Partida.js';

export default {
    name: "UnirsePartida",
    mixins: [autenticadorSesion],
    data() {
        return {
            partidas: []
        };
    },
    created() {
        const nombreUsuario = localStorage.getItem('user') || sessionStorage.getItem('user');
        this.buscarPartidas(nombreUsuario);
    },
    methods: {
        buscarPartidas(nombreUsuario) {
            axios.get(`http://localhost:9992/partida/invitado/${nombreUsuario}`)
                .then(({ data }) => {
                    this.partidas = data.map(partida => new Partida(partida.nombre, partida.nJugadores, partida.jugadores, partida.link, partida.dineroinicial, partida.tiempomaximo, partida.tiempoporturno));
                })
                .catch(err => {
                    console.error(err);
                    alert("Partida no encontrada");
                });
        },
        accederPartida(nombrePartida) {
            this.$router.push({ name: 'VerPartida', params: { nombrePartida } });
        },
        volverAtras() {
            this.$router.push({ name: 'Home' });
        }  
        
    }
};
</script>

<style scoped>
.partidas-container {
    width: 80%;
    margin: 0 auto;
}

.lista-partidas {
    list-style-type: none;
    padding: 0;
}

.partida-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
}

button {
    margin-top: 10px;
    padding: 8px 12px;
    cursor: pointer;
    margin-right: 10px;
}

.volverAtrasBoton {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 10px;
    width: 200px;
}
</style>