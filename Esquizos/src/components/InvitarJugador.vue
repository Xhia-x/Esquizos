<template>
    <div v-if="partida.nombre === partidaInvitacion" class="invitar-jugador">
        <input type="text" v-model="nombreJugador" placeholder="Nombre de usuario" />
        <button @click="invitarJugador">Enviar invitación</button>
    </div>
</template>

<script>
import axios from "axios";
import Invitacion from '../models/Invitacion.js';

export default {
    name: "InvitarJugador",
    props: {
        partida: Object,
        partidaInvitacion: String
    },
    data() {
        return {
            nombreJugador: ''
        };
    },
    methods: {
        invitarJugador() {
            if (this.nombreJugador.trim() === '') {
                alert("Por favor, ingresa un nombre de usuario.");
                return;
            }
            if (this.partida.jugadores.includes(this.nombreJugador)) {
                alert("El usuario ya está en la partida");
                return;
            }
            if (this.partida.jugadores.length >= this.partida.nJugadores) {
                alert("La partida está llena");
                return;
            }
            const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
            if (usuario === this.nombreJugador) {
                alert("No puedes invitarte a ti mismo");
                return;
            }
            var invitacion = new Invitacion(usuario, this.nombreJugador, this.partida.nombre);
            axios.post("http://localhost:9992/invitacion", invitacion)
                .then(({ data }) => {
                    if (data.status === true) {
                        alert(`Invitación enviada a ${this.nombreJugador} para la partida ${this.partida.nombre}`);
                        this.nombreJugador = '';
                    } else {
                        alert("Usuario no encontrado o ya invitado a la partida");
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert("Error, Try Again");
                });
        }
    }
};
</script>

<style scoped>
.invitar-jugador {
    margin-top: 10px;
}
</style>
