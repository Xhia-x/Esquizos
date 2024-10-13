<template>
<div class="monopoly-board">
    <!-- Esquinas vacías -->
    <div class="corner top-left" id="corner-top-left"></div>
    <div class="corner top-right" id="corner-top-right"></div>
    <div class="corner bottom-left" id="corner-bottom-left"></div>
    <div class="corner bottom-right" id="corner-bottom-right"></div>

    <!-- Lado superior -->
    <div class="side top-side">
        <div class="property-top" :id="'top-' + index" v-for="(casilla, index) in 9" :key="'top-' + index">
            <Casilla />
        </div>
    </div>

    <!-- Lado derecho -->
    <div class="side right-side">
        <div class="property-rotate-right" :id="'right-' + index" v-for="(casilla, index) in 9" :key="'right-' + index">
            <Casilla />
        </div>
    </div>

    <!-- Lado inferior -->
    <div class="side bottom-side">
        <div class="property-bottom" :id="'bottom-' + index" v-for="(casilla, index) in 9" :key="'bottom-' + index">
            <Casilla />
        </div>
    </div>

    <!-- Lado izquierdo -->
    <div class="side left-side">
        <div class="property-rotate-left" :id="'left-' + index" v-for="(casilla, index) in 9" :key="'left-' + index">
            <Casilla />
        </div>
    </div>

    <!-- Logo centrado -->
    <div class="center-logo">
        <img src="@/assets/monopolylogo.png" alt="Monopoly Logo" />
    </div>

    <!-- Ruleta y dado -->
    <div class="ruletaDado">
        <dados @diceRolled="movePieceBasedOnDice" />
    </div>

    <!-- Ficha -->
    <div class="container" :style="pieces[0].style" @click="movePiece(0)">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
</template>

<script>
import dados from './dados.vue';
import Casilla from '@/components/casillas.vue';

export default {
    name: "MonopolyView",
    components: {
        dados,
        Casilla
    },
    data() {
        return {
            pieces: [{
                currentPosition: 0, // Posición inicial de la ficha (esquina inferior derecha)
                style: {
                    top: '90%',
                    left: '90%',
                    transform: 'translate(-50%, -50%)'
                }
            }],
            step: 10, // Porcentaje de movimiento en cada dirección
        };
    },
    methods: {
        // Mover la ficha un número específico de pasos basado en el valor de los dados
        movePieceBasedOnDice(steps) {
            let position = this.pieces[0].currentPosition || 0; // Posición actual
            position = (position + steps) % 40; // Asumiendo que hay 40 casillas en total (36 + 4 esquinas)
            this.pieces[0].currentPosition = position;

            // Determinar la casilla correspondiente basada en la posición
            const casillaId = this.getCasillaIdFromPosition(position);

            // Mover la ficha a la nueva casilla
            const casillaElement = document.getElementById(casillaId);
            if (casillaElement) {
                const rect = casillaElement.getBoundingClientRect();
                this.pieces[0].style = {
                    top: `${rect.top}px`,
                    left: `${rect.left}px`,
                    transform: 'translate(-50%, -50%)'
                };
            }
        },

        // Obtener el ID de la casilla basado en la posición de la ficha
        getCasillaIdFromPosition(position) {
            if (position === 0) {
                return 'corner-bottom-right';
            } else if (position === 10) {
                return 'corner-bottom-left';
            } else if (position === 20) {
                return 'corner-top-left';
            } else if (position === 30) {
                return 'corner-top-right';
            } else if (position < 10) {
                return `bottom-${position - 1}`;
            } else if (position < 20) {
                return `left-${position - 11}`;
            } else if (position < 30) {
                return `top-${position - 21}`;
            } else {
                return `right-${position - 31}`;
            }
        }
    }
};
</script>

<style scoped>
.monopoly-board {
    display: grid;
    grid-template-columns: 230px repeat(9, 170px) 230px;
    grid-template-rows: 230px repeat(9, 170px) 230px;
    width: auto;
    height: auto;
    border: 2px solid black;
    padding: 0;
    margin: 0;
    gap: 0;
}

/* Esquinas cuadradas */
.corner {
    background-color: lightgray;
    border: 2px solid black;
    width: 230px;
    height: 230px;
    box-sizing: border-box;
}

.top-left {
    grid-column: 1;
    grid-row: 1;
}

.top-right {
    grid-column: 11;
    grid-row: 1;
}

.bottom-left {
    grid-column: 1;
    grid-row: 11;
}

.bottom-right {
    grid-column: 11;
    grid-row: 11;
}

/* Lados del tablero */
.side {
    display: grid;
    padding: 0;
    margin: 0;
    gap: 0;
}

.top-side,
.bottom-side {
    grid-column: 2 / span 9;
    display: grid;
    grid-template-columns: repeat(9, 170px);
    /* Asegura que las casillas coincidan con las esquinas */
}

.right-side,
.left-side {
    grid-row: 2 / span 9;
    display: grid;
    grid-template-rows: repeat(9, 170px);
    /* Asegura que las casillas coincidan con las esquinas */
    justify-items: stretch;
    align-items: center;
    /* Asegura que las casillas laterales estén alineadas con las esquinas */
}

.right-side {
    grid-column: 11;
    margin-left: 28px;
    /* Mueve hacia la derecha */
}

.left-side {
    grid-column: 1;
    margin-left: 33px;
    /* Mueve hacia la derecha */
}

/* Casillas con tamaño fijo */
.property-top,
.property-bottom,
.property-rotate-right,
.property-rotate-left {
    width: 170px;
    height: 170px;
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.property-top {
    transform: rotate(180deg);
    /* Casillas superiores mirando hacia abajo */
}

.property-rotate-right {
    transform: rotate(-90deg);
    /* Casillas laterales derechas mirando hacia la izquierda */
}

.property-rotate-left {
    transform: rotate(90deg);
    /* Casillas laterales izquierdas mirando hacia la derecha */
}

/* Alineación de las casillas superiores e inferiores */
.top-side {
    grid-column: 2 / span 9;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(9, 170px);
    /* Ajusta el tamaño para que coincida con las esquinas */
    justify-items: stretch;
    align-items: center;
    /* Alinea el contenido de las casillas */
}

.bottom-side {
    grid-column: 2 / span 9;
    grid-row: 11;
    display: grid;
    grid-template-columns: repeat(9, 170px);
    /* Ajusta el tamaño para que coincida con las esquinas */
    justify-items: stretch;
    align-items: center;
    /* Alinea el contenido de las casillas */
}

/* Alineación de las casillas laterales con las esquinas */
.left-side,
.right-side {
    grid-template-rows: repeat(9, 170px);
    /* Ajusta el tamaño para que coincida con las esquinas */
    justify-items: stretch;
    align-items: center;
}

/* Logo centrado */
.center-logo {
    grid-column: 5 / span 3;
    grid-row: 5 / span 3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

/* Ficha */
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 96px;
    width: 96px;
    background-color: #9b59b6;
    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
    transform-origin: center;
    z-index: 1;
    transition: top 0.5s ease, left 0.5s ease, transform 0.5s ease; /* Añadido */
}

.container::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background-color: #fff;
    border: solid 5px #ffffff;
    border-radius: 50%;
}



@keyframes rotate_3922 {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.ruletaDado {
    grid-column: 5 / span 3;
    grid-row: 7;
    /* Cambia a una fila más baja para mover los dados hacia abajo */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 100px;
    /* Agrega un margen superior para ajustar la posición si es necesario */
}
</style>
