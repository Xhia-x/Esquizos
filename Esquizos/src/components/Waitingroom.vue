<template>
<div>
    <h1>Esperando que el administrador seleccione el tablero...</h1>
</div>
</template>

  
<script>
import { io } from 'socket.io-client';

export default {
    data() {
        return {
            socket: null,
        };
    },
    methods: {
        onLevelSelected(data) {
            // Redirigir cuando el tablero esté seleccionado
            this.$router.push(`/tablero${data.levelId}`);
        },
    },
    mounted() {
        this.socket = io('http://localhost:3000');

        // Escucha el evento 'level-selected' y redirige al tablero
        this.socket.on('level-selected', this.onLevelSelected);

        // Escucha el evento 'start-game' cuando el administrador elige el tablero
        this.socket.on('start-game', () => {
            console.log('Esperando selección del tablero...');
        });
    },
    beforeDestroy() {
        if (this.socket) this.socket.disconnect();
    },
};
</script>
