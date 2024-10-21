<template>
    <div v-if="partida!=null" class="alert-container">
        <div class="alert-box">
            <button class="close-button" @click="cerrarAlerta">✖</button>
            <p>¡Se ha perdido la conexión! Haz clic en el botón para reconectar a la partida en curso.</p>
            <button @click="reconectar">Reconectar</button>
        </div>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Reconectar",
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            socket: null,
            partida: null,
        };
    },
    created() {
        //this.iniciarSocket();
        console.log("Reconectar creado");
        console.log(this.show);
        this.partida = JSON.parse(localStorage.getItem("partida")); 
        const usuario = localStorage.getItem("user") || sessionStorage.getItem("user");
        if(this.partida){
            if(this.partida.usuario != usuario){
                this.cerrarAlerta();
            }
        }
    },
    beforeUnmount() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket.off("disconnect");
            this.socket.off("connect");
        }

    },
    methods: {
        reconectar() {
            if (this.partida) {
                    this.$router.push(`/partida/${this.partida.nombre}`); // Redirigir a la URL de la partida     
            } else {
                alert("No hay partida para reconectar.");
            }
        },
        cerrarAlerta() {
            localStorage.removeItem("partida"); // Limpiar el nombre de la partida
            this.partida = null;
        }
    },
};
</script>

<style scoped>
.alert-container {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #f8d7da;
    color: #721c24;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.alert-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* Add relative positioning for the close button */
}

.close-button {
    position: absolute; /* Position the close button */
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #721c24;
    font-size: 20px;
    cursor: pointer;
}

button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
}
</style>
