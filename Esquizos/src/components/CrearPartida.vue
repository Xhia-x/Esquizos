<template>
<body>
    <div class="botonReglas">
        <Reglas>

        </Reglas>
    </div>

    <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>

    <div class="mainContainer">

        <div class="crear-partida">
            <h1>Crear Partida de Monopoly</h1>
            <form @submit.prevent="crearPartida">

                <div class="nombre-dinero-container">
                    <div class="form-group input-wrapper">
                        <label for="nombre">Nombre de la Partida:</label>
                        <input type="text" id="nombre" v-model="nombre" class="input" required />
                    </div>

                    <div class="form-group input-wrapper">
                        <label for="dineroInicial">Dinero Inicial:</label>
                        <input type="text" id="dineroInicial" v-model="dineroInicial" class="input" required />
                    </div>
                </div>

                <div class="reglas-group">
                    <h1>Reglas de la Partida</h1>
                    <div class="reglas-container">
                        
                        <!-- Mover la cantidad de jugadores dentro de este contenedor -->
                        <div class="jugadores-group">
                            <label for="nombre">Cantidad de jugadores:</label>
                            <div class="radio-group">
                                <input class="radio-input" name="jugadores" id="jugadores1" type="radio" v-model="jugadores" :value="3">
                                <label class="radio-label" for="jugadores1">
                                    <span class="radio-inner-circle"></span>
                                    3 Jugadores
                                </label>

                                <input class="radio-input" name="jugadores" id="jugadores2" type="radio" v-model="jugadores" :value="4">
                                <label class="radio-label" for="jugadores2">
                                    <span class="radio-inner-circle"></span>
                                    4 Jugadores
                                </label>

                                <input class="radio-input" name="jugadores" id="jugadores3" type="radio" v-model="jugadores" :value="5">
                                <label class="radio-label" for="jugadores3">
                                    <span class="radio-inner-circle"></span>
                                    5 Jugadores
                                </label>

                                <input class="radio-input" name="jugadores" id="jugadores4" type="radio" v-model="jugadores" :value="6">
                                <label class="radio-label" for="jugadores4">
                                    <span class="radio-inner-circle"></span>
                                    6 Jugadores
                                </label>

                                <input class="radio-input" name="jugadores" id="jugadores5" type="radio" v-model="jugadores" :value="7">
                                <label class="radio-label" for="jugadores5">
                                    <span class="radio-inner-circle"></span>
                                    7 Jugadores
                                </label>

                                <input class="radio-input" name="jugadores" id="jugadores6" type="radio" v-model="jugadores" :value="8">
                                <label class="radio-label" for="jugadores6">
                                    <span class="radio-inner-circle"></span>
                                    8 Jugadores
                                </label>
                            </div>
                        </div>

                        <!-- Tiempo máximo de la partida -->
                        <div class="tiempo-partida">
                            <label for="tiempoMaximo">Tiempo Maximo de la partida:</label>
                            <input class="radio-input" name="tiempoMaximo" id="tiempoMaximo1" type="radio" v-model="tiempoMaximo" value="-1">
                            <label class="radio-label" for="tiempoMaximo1">
                                <span class="radio-inner-circle"></span>
                                Sin límite
                            </label>

                            <input class="radio-input" name="tiempoMaximo" id="tiempoMaximo2" type="radio" v-model="tiempoMaximo" value="900">
                            <label class="radio-label" for="tiempoMaximo2">
                                <span class="radio-inner-circle"></span>
                                15 minutos
                            </label>

                            <input class="radio-input" name="tiempoMaximo" id="tiempoMaximo3" type="radio" v-model="tiempoMaximo" value="1800">
                            <label class="radio-label" for="tiempoMaximo3">
                                <span class="radio-inner-circle"></span>
                                30 minutos
                            </label>

                            <input class="radio-input" name="tiempoMaximo" id="tiempoMaximo4" type="radio" v-model="tiempoMaximo" value="3600">
                            <label class="radio-label" for="tiempoMaximo4">
                                <span class="radio-inner-circle"></span>
                                1 hora
                            </label>

                            <input class="radio-input" name="tiempoMaximo" id="tiempoMaximo4" type="radio" v-model="tiempoMaximo" value="3600">
                            <label class="radio-label" for="tiempoMaximo4">
                                <span class="radio-inner-circle"></span>
                                1.5 horas
                            </label>

                            <input class="radio-input" name="tiempoMaximo" id="tiempoMaximo5" type="radio" v-model="tiempoMaximo" value="7200">
                            <label class="radio-label" for="tiempoMaximo5">
                                <span class="radio-inner-circle"></span>
                                2 horas
                            </label>
                        </div>

                        <!-- Tiempo máximo por turno -->
                        <div class="tiempo-turno">
                            <label for="tiempoPorTurno">Tiempo Maximo por turno:</label>
                            <input class="radio-input" name="tiempoPorTurno" id="tiempoPorTurno1" type="radio" v-model="tiempoPorTurno" value="-1">
                            <label class="radio-label" for="tiempoPorTurno1">
                                <span class="radio-inner-circle"></span>
                                Sin límite
                            </label>

                            <input class="radio-input" name="tiempoPorTurno" id="tiempoPorTurno1" type="radio" v-model="tiempoPorTurno" value="-1">
                            <label class="radio-label" for="tiempoPorTurno1">
                                <span class="radio-inner-circle"></span>
                                15 segundos
                            </label>

                            <input class="radio-input" name="tiempoPorTurno" id="tiempoPorTurno2" type="radio" v-model="tiempoPorTurno" value="30">
                            <label class="radio-label" for="tiempoPorTurno2">
                                <span class="radio-inner-circle"></span>
                                30 segundos
                            </label>

                            <input class="radio-input" name="tiempoPorTurno" id="tiempoPorTurno3" type="radio" v-model="tiempoPorTurno" value="60">
                            <label class="radio-label" for="tiempoPorTurno3">
                                <span class="radio-inner-circle"></span>
                                60 segundos
                            </label>

                            <input class="radio-input" name="tiempoPorTurno" id="tiempoPorTurno4" type="radio" v-model="tiempoPorTurno" value="90">
                            <label class="radio-label" for="tiempoPorTurno4">
                                <span class="radio-inner-circle"></span>
                                90 segundos
                            </label>

                            <input class="radio-input" name="tiempoPorTurno" id="tiempoPorTurno5" type="radio" v-model="tiempoPorTurno" value="120">
                            <label class="radio-label" for="tiempoPorTurno5">
                                <span class="radio-inner-circle"></span>
                                2 minutos
                            </label>
                        </div>
                    </div>
                </div>


                

                <button class="button2" type="submit">
                    Crear partida
                </button>
            </form>
        </div>

        <div v-if="this.partidaCreada" class="enlaceGenerado">
            <h1>Enlace de la Partida</h1>
            <div class="linkContainer">
                <p class="textoLink">{{ partida.generarLinkCompartir() }}</p>
                <button type="button" class="copiarLinkBoton" @click="copiarAlPortapapeles(partida.generarLinkCompartir())">Copiar link</button>
            </div>
            <button type="button" class="accederAPartidaBoton" @click="accederPartida">Acceder a la Partida</button>
            <button @click="mostrarCampoInvitar(partida)">Invitar jugador</button>
            <InvitarJugador v-if="partida.nombre === partidaInvitacion" :partida="partida" :partidaInvitacion="partidaInvitacion" />
        </div>

        <button type="button" class="volverAtrasBoton" @click="volverAtras">volver atrás</button>

    </div>

</body>
</template>

<script>
import Partida from '../models/Partida.js';
import Reglas from './Reglas.vue';
import axios from 'axios';
import autenticadorSesion from '../mixins/AutenticadorSesion.js';
import InvitarJugador from './InvitarJugador.vue';
import Swal from 'sweetalert2'; // Importa SweetAlert2

export default {
    name: 'CrearPartida',
    components: {
        Reglas,
        InvitarJugador
    },
    mixins: [autenticadorSesion],
    data() {
        return {
            partida: new Partida('', '', 0, [], '', 0, 0, 0),
            nombre: '',
            jugadores: 3,
            dineroInicial: 1500,
            tiempoMaximo: -1,
            tiempoPorTurno: -1,
            partidaCreada: false,
            partidaInvitacion: null
        };
    },
    methods: {
        crearPartida() {
            if (!this.comprobacionesDinero()) {
                return;
            }
            this.partida.nombre = this.nombre;
            this.partida.nJugadores = this.jugadores;
            this.partida.dineroInicial = this.dineroInicial;
            this.partida.tiempoMaximo = parseInt(this.tiempoMaximo);
            this.partida.tiempoPorTurno = parseInt(this.tiempoPorTurno);

            this.partida.administrador = localStorage.getItem('user') || sessionStorage.getItem('user');
            this.partida.jugadores = [this.partida.administrador];
            this.generarLink();
            console.log(localStorage.getItem('user'));
            console.log("jugadores: " + this.partida.jugadores);
            console.log("admin: " + this.partida.administrador);
            console.log(this.partida.nombre);
            console.log(this.partida.link);
            console.log(this.partida.nJugadores);
            console.log(this.partida.dineroInicial);
            console.log(this.partida.tiempoMaximo);
            console.log(this.partida.jugadores);
            console.log(this.partida.tiempoPorTurno);
            console.log(this.partida.nombre);
            axios.post("http://localhost:9992/partida", this.partida)
                .then(({
                    data
                }) => {
                    if (data.status === true) {
                        this.partidaCreada = true;
                        
                        // SweetAlert2 para mostrar que la partida fue creada correctamente
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "La partida fue creada correctamente",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    } else {
                        this.partidaCreada = false;
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "El nombre de la partida ya existe, intenta con otro"
                        });
                    }
                })
                .catch(err => {
                    console.error(err);
                    this.partidaCreada = false;
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Hubo un error, intenta nuevamente"
                    });
                });
        },
        generarLink() {
            this.partida.link = '/partida/' + this.partida.nombre;
        },
        volverAtras() {
            this.$router.push({
                name: 'Home'
            });
        },
        comprobacionesDinero() {
            if (isNaN(this.dineroInicial)) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El dinero inicial debe ser un número válido"
                });
                return false;
            }
            if (this.dineroInicial < 500) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El dinero inicial debe ser mayor a 500"
                });
                return false;
            }
            if (this.dineroInicial > 100000) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El dinero inicial debe ser menor a 100.000"
                });
                return false;
            }
            return true;
        },
        accederPartida() {
            this.$router.push({
                name: 'VerPartida',
                params: {
                    nombrePartida: this.partida.nombre
                }
            });
        },
        copiarAlPortapapeles(texto) {
            navigator.clipboard.writeText(texto);
        },
        mostrarCampoInvitar(partida) {
            this.partidaInvitacion = this.partidaInvitacion === partida.nombre ? null : partida.nombre;
        }

    }
};
</script>


<style scoped>
.mainContainer {
    width: 90%;
    max-width: 1200px;
    height: 90%;
    background-color: #33333346;
    margin-top: 15px;
    margin-bottom: 15px;
}

h1 {
    font-size: 20px;
}

body {
    background: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}


.crear-partida {
    max-width: 900px; 
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    min-height: 520px; 
}


.form-group {
    margin-bottom: 5px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 11px;
}

input,
select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}



.botonReglas {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000; /* Asegúrate de que este elemento esté por encima */
}



.volverAtrasBoton {
    background-color: #c70000c2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
}

.enlaceGenerado {
    max-width: 400px;
    padding: 20px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    margin-top: 20px;
}

.accederAPartidaBoton {
    background-color: #c70000c2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
}

.textoLink {
    font-size: 14px;
    margin-bottom: 10px;
    background-color: #e6e6e6;
    width: 80%;
    margin: auto;
}

.copiarLinkBoton {
    background-color: #c70000c2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    height: 30px;
    padding: 0%;
}

.radio-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
}

.radio-label {
    display: flex;
    align-items: center;
    padding: 0.5em;
    margin-bottom: 0.5em;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: background-color 0.2s, border-color 0.2s;
}

.radio-label:hover {
    background-color: #e6e6e6;
}

.radio-input {
    position: absolute;
    opacity: 0;
}

.radio-input:checked+.radio-label {
    background-color: #ffc3c3;
    border-color: #c70000c2;
}

.radio-input:focus+.radio-label {
    outline: 2px solid #c70000c2;
}

.radio-inner-circle {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid #888;
    border-radius: 50%;
    margin-right: 0.5em;
    transition: border-color 0.2s;
    position: relative;
}

.radio-label:hover .radio-inner-circle {
    border-color: #555;
}

.radio-input:checked+.radio-label .radio-inner-circle {
    border-color: #c70000c2;
}

.radio-input:checked+.radio-label .radio-inner-circle::after {
    content: '';
    display: block;
    width: 0.5em;
    height: 0.5em;
    background-color: #c70000c2;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.input-wrapper input {
    background-color: #eee;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    width: 20em;
    border-radius: 1rem;
    color: rgb(0, 0, 0);
    box-shadow: 0 0.4rem #dfd9d9;
    cursor: pointer;
}

.input-wrapper input:focus {
    outline-color: lightcoral;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    margin-top: 20px; 
}

.button2 {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  cursor: pointer;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.button2:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.button2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #c70000c2;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:hover {
  color: #ffffff;
  border: 1px solid #c70000c2;
}

.button2:hover:before {
  top: -35%;
  background-color: #c70000c2;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
  top: -45%;
  background-color: #c70000c2;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.nombre-dinero-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.opciones-container {
    display: flex;
    justify-content: space-between;
    gap: 40px; 
    margin-top: 20px;
}

.jugadores-group {
    flex: 0.5; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
}

.reglas-group {
    flex: 1.5; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.reglas-container {
    display: flex;
    gap: 40px;
    width: 100%;
    align-items: stretch; 
}

.jugadores-group,
.tiempo-partida,
.tiempo-turno {
    flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%; 
}

.opciones-jugadores-reglas {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-top: 20px;
    width: 100%;
    align-items: stretch; 
}

.reglas-group h1 {
    text-align: center;
    width: 100%;
    margin-bottom: 20px; 

}

</style>
