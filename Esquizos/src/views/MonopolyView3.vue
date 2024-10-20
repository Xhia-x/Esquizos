<template>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chelsea Market">
<div class="monopoly-board">
    <video src="../assets/view2.mp4" autoplay="true" muted="true" loop="true"></video>

    <!-- Esquinas vacías -->
    <div class="corner top-left" id="21">
        <h1 class="carceletra1">Cárcel</h1>
        <img src="@/assets/encerradoC.webp" class="carcel" />
    </div>
    <div class="corner top-right" id="31">
        <h1 class="letrapolicia1">Ir a la </h1>
        <img src="@/assets/carcelC.png" class="policia" />
        <h1 class="letrapolicia2">carcel</h1>
    </div>
    <div class="corner bottom-left" id="11">
        <img src="@/assets/paso.webp" class="parking" />
    </div>
    <div class="corner bottom-right" id="1">
        <h1 class="LetraInicio">Start</h1>
        <img src="@/assets/startC.webp" class="Start" />
    </div>

    <!-- Lado superior -->
    <div class="side top-side">
        <div class="property-top" id="22">
            <Casilla color="red" title="Carrer de la Marina" price="100" />
        </div>
        <div class="property-top" id="23"> <Casilla color="" title="" price="" />
        </div>
    </div>
    <div class="property-top" id="24">
        <Casilla color="red" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-top" id="25">
        <Casilla color="red" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-top" id="26">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-top" id="27">
        <Casilla color="yellow" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-top" id="28">
        <Casilla color="yellow" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-top" id="29">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-top" id="30">
        <Casilla color="yellow" title="Carrer de la Marina" price="100" />
    </div>
</div>

<!-- Lado derecho -->
<div class="side right-side">
    <div class="property-rotate-right" id="32">
        <Casilla color="green" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-rotate-right" id="33">
        <Casilla color="green" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-rotate-right" id="34"> <Casilla color="" title="" price="" />
    </div>
</div>
<div class="property-rotate-right" id="35">
    <Casilla color="green" title="Carrer de la Marina" price="100" />
</div>
<div class="property-rotate-right" id="36">
    <Casilla color="" title="" price="" />
</div>
<div class="property-rotate-right" id="37">
    <Casilla color="" title="" price="" />
</div>
<div class="property-rotate-right" id="38">
    <Casilla color="blue" title="Carrer de la Marina" price="100" />
</div>
<div class="property-rotate-right" id="39">
    <Casilla color="" title="" price="" />
</div>
<div class="property-rotate-right" id="40">
    <Casilla color="blue" title="Carrer de la Marina" price="100" />
</div>


<!-- Lado inferior -->
<div class="side bottom-side">
    <div class="property-bottom" id="10">
        <Casilla color="lightblue" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-bottom" id="9">
        <Casilla color="lightblue" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-bottom" id="8">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-bottom" id="7">
        <Casilla color="lightblue" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-bottom" id="6">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-bottom" id="5">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-bottom" id="4">
        <Casilla color="brown" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-bottom" id="3">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-bottom" id="2">
        <Casilla color="brown" title="Carrer de la Marina" price="100" />
    </div>
</div>

<!-- Lado izquierdo -->
<div class="side left-side">
    <div class="property-rotate-left" id="20">
        <Casilla color="orange" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-rotate-left" id="19">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-rotate-left" id="18">
        <Casilla color="orange" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-rotate-left" id="17">
        <Casilla color="orange" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-rotate-left" id="16">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-rotate-left" id="15">
        <Casilla color="purple" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-rotate-left" id="14">
        <Casilla color="purple" title="Carrer de la Marina" price="100" />
    </div>
    <div class="property-rotate-left" id="13">
        <Casilla color="" title="" price="" />
    </div>
    <div class="property-rotate-left" id="12">
        <Casilla color="purple" title="Carrer de la Marina" price="100" />
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

<div class="ficha" :style="pieces[0].style" @click="movePiece(0)"></div>
<!-- Botón Figuras -->
<button class="figuras-button" @click="irAFiguras">Seleccionar Figuras</button>
<div class="gray-background"></div>
<button @click="goToMonopolyView2">Ir a Monopoly View 2</button>

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
        },

        // Método para navegar a la vista FigurasMonopoly
        irAFiguras() {
            this.$router.push({
                name: 'FigurasMonopoly'
            });
        },

        goToMonopolyView2() {
            this.$router.push({
                name: 'MonopolyView2'
            });
        }

    }
};
</script>

<style scoped>
.LetraInicio {
    font-family: 'Orbitron', sans-serif;
    /* Fuente cyberpunk */
    font-weight: bold;
    font-size: 40px;
    margin: 0;
    margin-right: 15%;
    margin-top: 18%;
    transform: rotate(-50deg);
    color: #000000;
    text-shadow: 0 0 5px #ff0fd3, 0 0 10px #ff23de, 0 0 15px #d914fc, 0 0 20px #4c00ff;
}

.monopoly-board {
    display: grid;
    grid-template-columns: 230px repeat(9, 170px) 230px;
    grid-template-rows: 230px repeat(9, 170px) 230px;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    gap: 0;
    position: absolute;
    /* Añade esta línea */
    overflow: hidden;
    /* Limita el contenido al tamaño del tablero */
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
    /* Se asegura que las casillas ocupen 9 columnas */
    grid-row: 11;
    /* Ajusta la fila inferior del tablero */
    display: grid;
    grid-template-columns: repeat(9, 170px);
    /* Asegura que las casillas tengan el tamaño adecuado */
    justify-items: stretch;
    align-items: center;
    /* Alinea el contenido de las casillas */
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
    width: 170px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.property-bottom {
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

.property-rotate-right {
    transform: rotate(-90deg);
    /* Casillas laterales derechas mirando hacia la izquierda */
}

.property-rotate-left {
    transform: rotate(90deg);
    /* Casillas laterales izquierdas mirando hacia la derecha */
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
    z-index: 0;
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
    z-index: -1;
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

/* Estilo para el botón Figuras */
.figuras-button {
    position: absolute;
    top: 600px;
    left: 1000px;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #cf34d7;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.figuras-button:hover {
    background-color: #ba18b7;
}

.ficha-imagen {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: -1;
    /* Colocar la imagen por encima de la ficha base */
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 3;
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
    margin-left: 4%;
    margin-top: 4%;
}

.carceletra1 {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
}

.gray-background {
    background-color: rgba(93, 12, 92, 0.332);
    grid-column: 1 / span 11;
    grid-row: 1 / span 11;
    pointer-events: none;
    z-index: -1;
}

.video {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
    object-fit: cover;
    pointer-events: none;
}
</style>
