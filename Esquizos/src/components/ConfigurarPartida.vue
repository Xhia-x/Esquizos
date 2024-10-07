    <template>
        <body>
            <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
            <button type="button" class="volverAtrasBoton" @click="volverAtras">volver atrás</button>
            <div class="mainContainer">
                <div class="crear-partida">
                    <h1>Configurar Partida de Monopoly</h1>
                    <form @submit.prevent="definirPartida">
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
                                <option value="300">5 minutos</option>
                                <option value="600">10 minutos</option>
                                <option value="900">15 minutos</option>
                                <option value="1800">30 minutos</option>
                            </select>
                        </div>
                        <button type="submit">Definir Reglas</button>
                    </form>
                </div>
            </div>
        </body>
    
    </template>

    <script>
    import axios from 'axios';
    import Partida from '../models/Partida.js';
    export default {
        name: 'ConfigurarPartida',
        data() {
            return {
                partida: this.obtenerPartida() || new Partida('', 0, [], ''),
                dineroInicial: 1500,
                tiempoMaximo: -1,
                tiempoPorTurno: -1
            };
        },
        methods: {
            obtenerPartida() {
                const partidaQuery = this.$route.query.partida;
                if (partidaQuery) {
                    try {
                        return JSON.parse(partidaQuery); // Deserialize JSON to an object
                    } catch (error) {
                        console.error('Error parsing partida query:', error);
                        return null;
                    }
                }
                return null;
            },
            definirPartida() {
                this.partida.dineroInicial = this.dineroInicial;
                this.partida.tiempoMaximo = parseInt(this.tiempoMaximo);
                this.partida.tiempoPorTurno = parseInt(this.tiempoPorTurno);
                console.log(this.partida.nombre);
                console.log(this.partida.link);
                console.log(this.partida.nJugadores);
                console.log(this.partida.dineroInicial);
                console.log(this.partida.tiempoMaximo);
                console.log(this.partida.jugadores);
                console.log(this.partida.tiempoPorTurno);
                axios.post("http://localhost:9992/partida", this.partida)
                .then(({data}) => {
                    if (data.status === true) {
                        alert("Partida Creada");
                        this.$router.push({ name: 'Home' });
                    } else {
                        alert("Nombre de Partida ya existe, Intente con otro");
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert("Error, Try Again");
                });
            },
            volverAtras() {
                this.$router.push({ name: 'CrearPartida' });
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

    body {
        background: none;
        position: relative;
        margin: 0;
        margin: 0;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    video {
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        transform: translateX(calc((100% - 100vw) / 2));
        z-index: -210;
        object-fit: cover;
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
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
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
</style>