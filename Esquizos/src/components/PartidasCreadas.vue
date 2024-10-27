<template>
    <Reglas />
    <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
    <div class="partidas-container">
        <h1>Partidas Creadas</h1>
        <ul class="lista-partidas">
            <li v-for="partida in partidas" :key="partida.nombre" class="partida-item card">
                <div class="card-border-top"></div>
                <!-- Muestra la imagen aleatoria para cada tarjeta -->
                <div class="img">
                    <img :src="getRandomImage()" alt="Monopoly character" class="monopoly-image"/>
                </div>
                <span>{{ partida.nombre }}</span>
                <p class="job">Número de jugadores: {{ partida.nJugadores }}</p>
                <div class="botones-container">
                    <button class="button" @click="accederPartida(partida.nombre)">Acceder a la partida</button>
                    <button class="button" @click="compartirPartida(partida.generarLinkCompartir())">Compartir partida</button>
                    <button class="button" @click="mostrarCampoInvitar(partida)">Invitar jugador</button>
                </div>
                <InvitarJugador v-if="partida.nombre === partidaInvitacion" :partida="partida"/>
            </li>
        </ul>
    </div>
    <button type="button" class="volverAtrasBoton" @click="volverAtras">volver atrás</button>
</template>

<script>
import SorpresaImage from '@/assets/Sorpresa.png';
import BilleteImage from '@/assets/Billete.png';

import axios from "axios";
import autenticadorSesion from '../mixins/AutenticadorSesion.js';
import Partida from '../models/Partida.js';
import InvitarJugador from './InvitarJugador.vue';
import Reglas from './Reglas.vue';
import PopUp from './PopUp.vue';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'animate.css/animate.min.css'; // Importa el archivo correcto desde la carpeta node_modules


export default {
    name: "PartidasCreadas",
    mixins: [autenticadorSesion],
    components: {
        InvitarJugador,
        Reglas,
        PopUp
    },
    data() {
        return {
            partidas: [],
            partidaInvitacion: null,
            images: [SorpresaImage, BilleteImage]
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
                    this.partidas = data.map(partida => new Partida(partida.nombre, partida.administrador, partida.nJugadores, partida.jugadores, partida.link, partida.dineroinicial, partida.tiempomaximo, partida.tiempoporturno));
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
        navigator.clipboard.writeText(link); // Copia el enlace al portapapeles
        Swal.fire({
            title: "Enlace de la partida copiado",
            text: `Link de la partida: ${link}`,
            icon: "success",
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
            }
        });
    },
        mostrarCampoInvitar(partida) {
            this.partidaInvitacion = this.partidaInvitacion === partida.nombre ? null : partida.nombre;
        },
        getRandomImage() {
            const randomIndex = Math.floor(Math.random() * this.images.length);
            return this.images[randomIndex];
        },
        volverAtras() {
            this.$router.push({ name: 'Home' });
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.partida-item {
    background-color: #2a5934; 
    border-radius: 15px;
    width: 190px;
    height: 340px; 
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 5px 60px 0px #100a;
    transition: transform 0.3s ease;
    border: 1px solid #FFFFFF;
    padding-bottom: 15px; 
}

.partida-item:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.card-border-top {
    width: 60%;
    height: 3%;
    background: #88ac90;
    margin: auto;
    border-radius: 0px 0px 15px 15px;
}

.img {
    width: 70px;
    height: 80px;
    background: #88ac90;
    border-radius: 15px;
    margin-top: 25px;
}

.monopoly-image {
    width: 70px;
    height: 80px;
    object-fit: contain;
}

span {
    font-weight: 600;
    color: #F8E8A0;
    text-align: center;
    padding-top: 10px;
    font-size: 16px;
}

.job {
    font-weight: 400;
    color: #F8E8A0;
    text-align: center;
    padding-top: 3px;
    font-size: 12px;
}

.botones-container {
    display: flex;
    flex-direction: column;
    gap: 10px; 
}

button {
    padding: 3px 10px; 
    border-radius: 6px;
    border: none;
    background: #d96c6c;
    color: white;
    font-size: 10px; 
    font-weight: 600;
    cursor: pointer;
    width: 100%; 
    transition: background-color 0.3s ease;
}

button:hover {
    background: #f5f5;
    transform: scale(0.96);
}


.volverAtrasBoton {
    background-color: #9c1616c2;
    color: #F8E8A0;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    max-width: 8%;
}

.volverAtrasBoton:hover {
    background-color: #9c1616c2;
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
    border: 1px solid #FFFFFF;
    color: #fff;
    cursor: pointer;
    background-color: #c70000c2;
    transition: all 0.2s ease;
}

.button:active {
    transform: scale(0.96);
}
</style>
