<template>
        <Reglas />
    <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
    <div class="partidas-container">
        <h1>Partidas Unidas</h1>
        <ul class="lista-partidas">
            <li v-for="partida in partidas" :key="partida.nombre" class="partida-item card">
                <div class="card-border-top"></div>
                <!-- Muestra la imagen aleatoria para cada tarjeta -->
                <div class="img">
                    <img :src="getRandomImage()" alt="Monopoly character" class="monopoly-image"/>
                </div>
                <span>{{ partida.nombre }}</span>
                <p class="job">Número de jugadores: {{ partida.nJugadores }}</p>
                <button class="button" @click="accederPartida(partida.nombre)">Acceder a la partida</button>
            </li>
        </ul>
    </div>
    <button type="button" class="volverAtrasBoton" @click="volverAtras">volver atrás</button>

</template>

<script>
// Importa las imágenes directamente para asegurarte de que estén disponibles en el proyecto.
import SorpresaImage from '@/assets/Sorpresa.png';
import BilleteImage from '@/assets/Billete.png';

import axios from "axios";
import autenticadorSesion from '../mixins/AutenticadorSesion.js';
import Partida from '../models/Partida.js';
import Reglas from './Reglas.vue';

export default {
    name: "UnirsePartida",
    mixins: [autenticadorSesion],
    components: {
        Reglas
    },
    data() {
        return {
            partidas: [],
            // Asigna las imágenes importadas a las variables
            images: [
                SorpresaImage,
                BilleteImage
            ]
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
                    this.partidas = data.map(partida => new Partida(partida.nombre, partida.nJugadores, partida.jugadores, partida.link, partida.dineroinicial, partida.tiempomaximo, partida.tiempoporturno, partida.tableroSeleccionado));
                })
                .catch(err => {
                    console.error(err);
                    alert("Partida no encontrada");
                });
        },
        accederPartida(nombrePartida) {
            this.$router.push({ name: 'VerPartida', params: { nombrePartida } });
        },
        getRandomImage() {
            // Selecciona una imagen aleatoria de la lista de imágenes
            const randomIndex = Math.floor(Math.random() * this.images.length);
            return this.images[randomIndex];
        },
        volverAtras() {
            this.$router.push({ name: 'Home' });
        },
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
    height: 254px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 5px 60px 0px #100a;
    transition: transform 0.3s ease;
    border: 1px solid #FFFFFF;
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
    padding: 5px 15px; 
    display: block;
    margin-top: 15px; 
    border-radius: 8px;
    border: none;
    background: #d96c6c;
    color: white;
    font-size: 12px; 
    font-weight: 600;
    cursor: pointer;
    width: auto; 
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
    color: #F8E8A0;
    cursor: pointer;
    background-color: #9c1616c2;
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
