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