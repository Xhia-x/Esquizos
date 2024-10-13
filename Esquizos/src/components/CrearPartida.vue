<template>
    <body>
      <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
 
      <div class="mainContainer">

        <Reglas>
           
        </Reglas>

 
            <div class="crear-partida">
                <h1>Crear Partida de Monopoly</h1>
                <form @submit.prevent="crearPartida">
                    <div class="form-group">
                        <label for="nombre">Nombre de la Partida:</label>
                        <input type="text" id="nombre" v-model="nombre" required />
                    </div>
                    <div class="form-group">
                        <label for="jugadores">Número de Jugadores:</label>
                        <select id="jugadores" v-model="jugadores" required>
                            <option v-for="i in 6" :key="i" :value="i + 2">{{ i + 2 }}</option>
                        </select>
                    </div>

                    <h1>Reglas de la Partida</h1>
                    <div class="form-group">
                        <label for="dineroInicial">Dinero Inicial:</label>
                        <input type="text" id="dineroInicial" v-model="dineroInicial" required />
                    </div>
                    <div class="form-group">
                        <label for="tiempoMaximo">Tiempo Máximo:</label>
                        <select id="tiempoMaximo" v-model="tiempoMaximo" required>
                            <option value="-1">Sin límite</option>
                            <option value="900">15 minutos</option>
                            <option value="1800">30 minutos</option>
                            <option value="3600">1 hora</option>
                            <option value="7200">2 horas</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="tiempoPorTurno">Tiempo por turno:</label>
                        <select id="tiempoPorTurno" v-model="tiempoPorTurno" required>
                            <option value="-1">Sin límite</option>
                            <option value="30">30 segundos</option>
                            <option value="60">60 segundos</option>
                            <option value="90">90 segundos</option>
                            <option value="120">2 minutos</option>
                        </select>
                    </div>

                    <button type="submit">Crear Partida</button>
                </form>
            </div>

            <div v-if="this.partidaCreada" class="enlaceGenerado">
                <h1>Enlace de la Partida</h1>
                <div class="linkContainer">
                    <p class="textoLink">{{ partida.generarLinkCompartir() }}</p>
                    <button type="button" class="copiarLinkBoton" @click="copiarAlPortapapeles(partida.generarLinkCompartir())">Copiar</button>
                </div>
                <button type="button" class="accederAPartidaBoton" @click="accederPartida">Acceder a la Partida</button>
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

export default {
    name: 'CrearPartida',
    components:{
        Reglas
    },
    mixins: [autenticadorSesion],
    data() {
        return {
            partida: new Partida('', 0,"", '', 0, 0, 0),
            nombre: '',
            jugadores: 3,
            dineroInicial: 1500,
            tiempoMaximo: -1,
            tiempoPorTurno: -1,
            partidaCreada: false
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

            this.generarLink();
            console.log(localStorage.getItem('user'));
            console.log("jugadores: "+this.partida.jugadores);
            console.log("admin: "+this.partida.administrador);
            console.log(this.partida.nombre);
            console.log(this.partida.link);
            console.log(this.partida.nJugadores);
            console.log(this.partida.dineroInicial);
            console.log(this.partida.tiempoMaximo);
            console.log(this.partida.jugadores);
            console.log(this.partida.tiempoPorTurno);
            console.log(this.partida.nombre);
            axios.post("http://localhost:9992/partida", this.partida)
            .then(({data}) => {
                if (data.status === true) {
                    this.partidaCreada = true;
                    alert("Partida Creada");
                } else {
                    this.partidaCreada = false;
                    alert("Nombre de Partida ya existe, Intente con otro");
                    
                }
            })
            .catch(err => {
                console.error(err);
                this.partidaCreada = false;
                alert("Error, Try Again");
                
            });
        },
        generarLink() {
            this.partida.link = '/partida/' + this.partida.nombre;
        },
        volverAtras() {
            this.$router.push({ name: 'Home' });
        },
        comprobacionesDinero(){
            if (isNaN(this.dineroInicial)) {
                alert("El dinero inicial debe ser un número válido");
                return false;
            }
            if (this.dineroInicial < 500) {
                alert("El dinero inicial debe ser mayor a 500");
                return false;
            }
            if(this.dineroInicial >100000){
                alert("El dinero inicial debe ser menor a 100.000");
                return false;
            }
            return true;
        },
        accederPartida() {
            this.$router.push({ name: 'VerPartida', params: { nombrePartida: this.partida.nombre } });
        },
        copiarAlPortapapeles(texto) {
            navigator.clipboard.writeText(texto);
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
    margin-top:15px;
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
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
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

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #0056b3;
}

.volverAtrasBoton {
    background-color: #3498db;
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
    background-color: #3498db;
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
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    height: 30px;
    padding: 0%;
}
</style>