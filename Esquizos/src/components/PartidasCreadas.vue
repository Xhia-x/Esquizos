<template>
    
    <div class="partidas-container">
        <h1>Partidas Creadas</h1>
        <ul class="lista-partidas">
            <li v-for="partida in partidas" :key="partida.nombre" class="partida-item">
                <h2>{{ partida.nombre }}</h2>
                <p>Número de jugadores: {{ partida.nJugadores }}</p>
                <button @click="accederPartida(partida.nombre)">Acceder a la partida</button>
                <button @click="compartirPartida(partida.generarLinkCompartir())">Compartir partida</button>
                <button @click="mostrarCampoInvitar(partida)">Invitar jugador</button>
                <InvitarJugador v-if="partida.nombre === partidaInvitacion" :partida="partida" :partidaInvitacion="partidaInvitacion"
                />
            </li>
        </ul>
    </div>
    <button type="button" class="volverAtrasBoton" @click="volverAtras">volver atrás</button>
</template>

<script>

import axios from "axios";
import autenticadorSesion from '../mixins/AutenticadorSesion.js';
import Partida from '../models/Partida.js';
import InvitarJugador from './InvitarJugador.vue';

export default {
    name: "PartidasCreadas",
    mixins: [autenticadorSesion],
    components: {
        InvitarJugador

    },
    data() {
        return {
            partidas: [],
            partidaInvitacion: null,
        };
    },
    created() {
        const nombreUsuario = localStorage.getItem('user') || sessionStorage.getItem('user');
        this.buscarPartidas(nombreUsuario);
    },
    methods: {
        buscarPartidas(nombreUsuario) {
            axios.get(`http://localhost:9992/partida/usuario/${nombreUsuario}`)
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
        compartirPartida(link) {       
            navigator.clipboard.writeText(link);
            alert(`Link de la partida copiado al portapapeles: ${link}`);
        },
        volverAtras() {
            this.$router.push({ name: 'Home' });
        },
        mostrarCampoInvitar(partida) {
            this.partidaInvitacion = this.partidaInvitacion === partida.nombre ? null : partida.nombre;
        }      
        
    }
};
</script>

<style scoped>
.partidas-container {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background-color: #f0f4f8;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.lista-partidas {
    list-style-type: none;
    padding: 0;
}

.partida-item {
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
}

.partida-item:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

h2 {
    color: #2c3e50;
    margin-bottom: 10px;
}

p {
    color: #7f8c8d;
    margin-bottom: 10px;
}

button {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 10px;
}

button:hover {
    background-color: #2980b9;
}

.volverAtrasBoton {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.volverAtrasBoton:hover {
    background-color: #c0392b;
}

@media (max-width: 768px) {
    .partidas-container {
        width: 95%;
    }

    button {
        width: 100%;
        margin-bottom: 10px;
    }

    .volverAtrasBoton {
        width: auto;
    }
}
</style>
