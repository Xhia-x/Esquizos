<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto Mono"></link>
<div class="monopoly-board">
    <!-- Esquinas vacías -->
    <div class="corner top-left" id="21">
        <h1 class="carceletra1">De Paso</h1>
        <img src="@/assets/carcel.png" class="carcel"/>
    </div>
    <div class="corner top-right" id="31">
        <h1 class="letrapolicia1" >Ir a la </h1>
        <img src="@/assets/policia.png" class="policia"/> 
        <h1 class="letrapolicia2">carcel</h1>
    </div>
    <div class="corner bottom-left" id="11">
        <img src="@/assets/Parking.png" class="parking"/>
    </div>
    <div class="corner bottom-right" id="1">
        <h1 class="LetraInicio">Start</h1>
        <img src="@/assets/Start.png" class="Start" />
    </div>

    <!-- Lado superior (IDs del 22 al 30) -->
    <div class="side top-side">
        <div class="property-top" :id="22 + index" v-for="(casilla, index) in 9" :key="22 + index">
            <Casilla />
        </div>
    </div>

    <!-- Lado derecho (IDs del 32 al 40) -->
    <div class="side right-side">
        <div class="property-rotate-right" :id="32 + index" v-for="(casilla, index) in 9" :key="32 + index">
            <Casilla />
        </div>
    </div>

    <!-- Lado inferior (IDs del 10 al 2, invertidos) -->
    <div class="side bottom-side">
        <div class="property-bottom" :id="10 - index" v-for="(casilla, index) in 9" :key="10 - index">
            <Casilla />
        </div>
    </div>

    <!-- Lado izquierdo (IDs del 20 al 12, invertidos) -->
    <div class="side left-side">
        <div class="property-rotate-left" :id="20 - index" v-for="(casilla, index) in 9" :key="20 - index">
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
    <div class="ficha" :style="pieces[0].style" @click="movePiece(0)">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="gray-background"></div>
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
                currentPosition: 1, // Posición inicial de la ficha (esquina inferior derecha)
                style: {
                    top: '1850px',
                    left: '1850px',
                    transform: 'translate(-50%, -50%)'
                }
            }],
            step: 5, // Porcentaje de movimiento en cada dirección
        };
    },
    methods: {
        // Mover la ficha según los pasos dados
        movePieceBasedOnDice(steps) {
            let position = this.pieces[0].currentPosition || 0; // Posición actual de la ficha

            for (let i = 1; i <= steps; i++) {
                setTimeout(() => {
                    position = (position + 1) % 40; // Asegurarse de que no se pase de las 40 casillas
                    this.pieces[0].currentPosition = position;

                    // Determinar la nueva casilla
                    const casillaId = this.getCasillaIdFromPosition(position);
                    this.movePieceToCasilla(casillaId);
                }, i * 500); // 300ms de pausa entre cada movimiento, ajustable para la velocidad de la animación
            }
        },

        // Método adicional para mover la ficha a la casilla específica
        movePieceToCasilla(casillaId) {
            const casillaElement = document.getElementById(casillaId);
            if (casillaElement) {
                const rect = casillaElement.getBoundingClientRect();

                // Ajustar las coordenadas de la ficha
                this.pieces[0].style = {
                    top: `${rect.top + window.scrollY}px`, // Añadir scrollY para corregir si hay desplazamiento de la página
                    left: `${rect.left + window.scrollX}px`, // Añadir scrollX para corregir si hay desplazamiento de la página
                    transform: 'translate(-50%, -50%)' // Mantener la ficha centrada
                };
            }
        },

        // Método para obtener el ID de la casilla basado en la posición de la ficha
        getCasillaIdFromPosition(position) {
            return position;
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
.ficha {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 96px;
    width: 96px;
    animation: rotate_3922 1.2s linear infinite;
    background-color: #9b59b6;
    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
    transform-origin: center;
    z-index: 1;
    transition: top 0.5s ease, left 0.5s ease, transform 0.5s ease;
    /* Añadido */
}

.ficha::after {
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

.contendor {
    display: flex;
    justify-content: center;
    align-items: center;
    /* tamaño del tablero */
    width: 100%;
    height: 100%;
  }

  .policia {
    width: 60%;
    height: 60%;
    rotate: 10deg;
    
  }

  .letrapolicia1 {
    font-family: 'Roboto Mono', sans-serif;
    
    font-size: 40px;
    
    margin: 0;
    font-weight: bold;
  }
  .letrapolicia2 {
    
    font-family: 'Roboto Monos', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
  }
  .Start {
    
    width: 60%;
    height: 60%;
    
  } 

  .LetraInicio {
    font-family: 'Roboto Mono', sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin: 0;
    margin-right: 15%;
    margin-top: 18%;
    transform: rotate(-50deg); 
    color: #ff0000;
  }
  .parking {
    width: 100%;
    height: 100%;
    rotate: 10deg;
  }
  .carcel {
    width: 90%;
    height: 90%;
    rotate: 45deg;
    margin-left: 24%;
    margin-top: 4%;
  }
  .carceletra1{
    font-family: 'Roboto Mono', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    
  }

  .gray-background {
    background-color: lightgray;
    grid-column: 1 / span 11;
    grid-row: 1 / span 11;
    pointer-events: none;
    z-index: -1
  } 

</style>
