<template>
<div class="level-selector-wrapper">
    <div class="level-selector">
        <div class="level" v-for="level in levels" :key="level.id">
            <img :src="require(`@/assets/${level.image}`)" :alt="level.name" class="level-image" />
            <h3>{{ level.name }}</h3>
            <button class="button" @click="selectLevel(level.id)">Seleccionar</button>
        </div>
    </div>
</div>
</template>

  
<script>
export default {
    data() {
        return {
            levels: [{
                    id: 1,
                    name: "Tablero 1",
                    image: "tablero1.png"
                },
                {
                    id: 2,
                    name: "Tablero 2",
                    image: "tablero2.png"
                },
                {
                    id: 3,
                    name: "Tablero 3",
                    image: "tablero3.png"
                },
                {
                    id: 4,
                    name: "Tablero 4",
                    image: "tablero4.png"
                },
            ],
        };
    },
    methods: {
        selectLevel(id) {
            alert(`Nivel ${id} seleccionado`);
        },
    },
};
</script>

  
<style scoped>
.level-selector-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    /* Fondo oscuro y semitransparente */
}

.level-selector {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    /* Fondo blanco y semitransparente */
    border-radius: 10px;
}

.level {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    max-width: 300px;
    margin: auto;
}

.level:hover {
    transform: scale(1.05);
}

.level-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
}

.button {
    position: relative;
    padding: 10px 22px;
    border-radius: 6px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: #7d2ae8;
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
    background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%);
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
    background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%),
        radial-gradient(circle, #7d2ae8 20%, transparent 20%);
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
