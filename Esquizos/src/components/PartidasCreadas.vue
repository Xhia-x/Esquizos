<template>
    <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
    <div class="partidas-container">
        <h1>Partidas Creadas</h1>
        <ul class="lista-partidas">
            <li v-for="partida in partidas" :key="partida.nombre" class="partida-item">
                <h2>{{ partida.nombre }}</h2>
                <p>Número de jugadores: {{ partida.nJugadores }}</p>
                <button class="button" @click="accederPartida(partida.nombre)">Acceder a la partida</button>
                <button class="button" @click="compartirPartida(partida.generarLinkCompartir())">Compartir partida</button>
                <button class="button" @click="mostrarCampoInvitar(partida)">Invitar jugador</button>
                <InvitarJugador v-if="partida.nombre === partidaInvitacion" :partida="partida"
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
                    this.partidas = data.map(partida => new Partida(partida.nombre, partida.administrador,partida.nJugadores, partida.jugadores, partida.link, partida.dineroinicial, partida.tiempomaximo, partida.tiempoporturno));
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
            console.log("admin: "+partida.administrador);
            console.log("jugadores: "+partida.jugadores);
        }      
        
    }
};
</script>

<style scoped>
.partidas-container {
    width: 50%;
    margin: 20px auto;
    padding: 20px;
    background-color: #d1d3d4;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.lista-partidas {
    list-style-type: none;
    padding: 0;
}

.partida-item {
    background-color: #dbdbdb;
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
    background-color: darksalmon;
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
.button {
    position: relative;
    padding: 10px 22px;
    border-radius: 6px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: #c70000c2;
    transition: all 0.2s ease;
}

.button:active {
    transform: scale(0.96);
}

.button:before,
.button:after {
    position: absolute;
    content: "";
    width: 150%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
}

.button:hover:before {
    top: -70%;
    background-image: radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, transparent 20%, #c70000c2 20%, transparent 30%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #c70000c2 15%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
        10% 10%, 18% 18%;
    background-position: 50% 120%;
    animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
    0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
            40% 90%, 55% 90%, 70% 90%;
    }

    50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
            50% 50%, 65% 20%, 90% 30%;
    }

    100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
            50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
}

.button:hover::after {
    bottom: -70%;
    background-image: radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #c70000c2 15%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%),
        radial-gradient(circle, #c70000c2 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
    background-position: 50% 0%;
    animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
    0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
            70% -10%, 70% 0%;
    }

    50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
            105% 0%;
    }

    100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
            110% 10%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
}
</style>
