<template>
    <body>
      <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
      <div class="mainContainer">
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
                    <button type="submit">Crear Partida</button>
                </form>
            </div>
        </div>
  </body>
  
</template>

<script>
export default {
    name: 'CrearPartida',
    data() {
        return {
            nombre: '',
            jugadores: 3
        };
    },
    methods: {
        crearPartida() {
            console.log(`Partida creada: ${this.nombre} con ${this.jugadores} jugadores`);
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