<template>
    <body>
      <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
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
                            <option value="Infinity">Sin límite</option>
                            <option value="900">15 minutos</option>
                            <option value="1800">30 minutos</option>
                            <option value="3600">1 hora</option>
                            <option value="7200">2 horas</option>
                        </select>

                    </div>
                    <button type="submit">Definir Reglas</button>
                </form>
            </div>
        </div>
  </body>
  
</template>

<script>
import Partida from '../models/Partida.js';
export default {
    name: 'ConfigurarPartida',
    data() {
        return {
            partida: new Partida('', 0,[], ''),
            dineroInicial: 20000,
            tiempoMaximo: Infinity,
        };
    },
    methods: {
        definirPartida() {
            this.partida.dineroInicial = this.dineroInicial;
            this.partida.tiempoMaximo = this.tiempoMaximo;
            console.log(this.partida.dineroInicial);
            console.log(this.partida.tiempoMaximo);
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
    display: flex;
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
</style>