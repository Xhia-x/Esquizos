<template>
<div>
    <h1>Esperando que el administrador seleccione el tablero...</h1>
</div>
</template>

  
<script>
import {
    io
} from 'socket.io-client';

export default {
    data() {
        return {
            socket: null
        };
    },
    methods: {
        onLevelSelected(data) {
            this.$router.push(`/tablero${data.levelId}`);
        },
    },
    mounted() {
        this.socket = io('http://localhost:3000');
        this.socket.on('level-selected', this.onLevelSelected);
    },
    beforeDestroy() {
        if (this.socket) this.socket.disconnect();
    },
};
</script>
