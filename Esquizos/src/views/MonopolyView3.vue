<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chelsea Market">
    <video src="../assets/view2.mp4" autoplay="true" muted="true" loop="true"></video>
  <div class="monopoly-board">

    <!--- Esquinas -->
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
      <div class="property-top" id="22"><Casilla color="red" title="AV. KENTUCKY" price="220" /></div>
      <div class="property-top" id="23"><Casilla color="" title="XD" price="" /></div>
      <div class="property-top" id="24"><Casilla color="red" title="AV. INDIANA" price="220" /></div>
      <div class="property-top" id="25"><Casilla color="red" title="AV.ILLINOIS" price="240" /></div>
      <div class="property-top" id="26"><Casilla color="" title="FERROCARRIL B. & O." price="200" /></div>
      <div class="property-top" id="27"><Casilla color="yellow" title="AV. ATLÁNTICO" price="260" /></div>
      <div class="property-top" id="28"><Casilla color="yellow" title="AV. VENTNOR" price="260" /></div>
      <div class="property-top" id="29"><Casilla color="" title="COMPAÑÍA DE AGUA" price="150" /></div>
      <div class="property-top" id="30"><Casilla color="yellow" title="JARDINES MARVIN" price="280" /></div>
    </div> 

    <!-- Lado derecho -->
    <div class="side right-side">
      <div class="property-rotate-right" id="32"><Casilla color="green" title="AV. PACÍFICO" price="300" /></div>
      <div class="property-rotate-right" id="33"><Casilla color="green" title="AV. CAROLINA DEL NORTE" price="300" /></div>
      <div class="property-rotate-right" id="34"><Casilla color="" title="XD" price="" /></div>
      <div class="property-rotate-right" id="35"><Casilla color="green" title="AV. PENNSYLVANIA" price="320" /></div>
      <div class="property-rotate-right" id="36"><Casilla color="" title="FERROCARRÍL VÍA RÁPIDA" price="200" /></div>
      <div class="property-rotate-right" id="37"><Casilla color="" title="XD" price="" /></div>
      <div class="property-rotate-right" id="38"><Casilla color="blue" title="PLAZA PARK" price="350" /></div>
      <div class="property-rotate-right" id="39"><Casilla color="" title="IMPUESTO SOBRE POSESIONES DE LUJO - PÁGUESE $100" price="" /></div>
      <div class="property-rotate-right" id="40"><Casilla color="blue" title="EL MUELLE" price="400" /></div>
    </div>

    <!-- Lado inferior -->
    <div class="side bottom-side">
      <div class="property-bottom" id="10"><Casilla color="lightblue" title="AV. CONNECTICUT" price="120" /></div>
      <div class="property-bottom" id="9"><Casilla color="lightblue" title="AV. VERMONT" price="100" /></div>
      <div class="property-bottom" id="8"><Casilla color="" title="XD" price="" /></div>
      <div class="property-bottom" id="7"><Casilla color="lightblue" title="AV. ORIENTAL" price="100" /></div>
      <div class="property-bottom" id="6"><Casilla color="" title="FERROCARRIL READING" price="200" /></div>
      <div class="property-bottom" id="5"><Casilla color="" title="Impuesto sobre ingreso - Páguese $200" price="" /></div>
      <div class="property-bottom" id="4"><Casilla color="brown" title="AV. BÁLTICA" price="60" /></div>
      <div class="property-bottom" id="3"><Casilla color="" title="XD" price="" /></div>
      <div class="property-bottom" id="2"><Casilla color="brown" title="AV. MEDITERRÁNEO" price="60" /></div>
    </div>

    <!-- Lado izquierdo -->
    <div class="side left-side">
      <div class="property-rotate-left" id="20"><Casilla color="orange" title="AV. NUEVA YORK" price="200" /></div>
      <div class="property-rotate-left" id="18"><Casilla color="orange" title="AV. TENNESSEE" price="180" /></div>
      <div class="property-rotate-left" id="19"><Casilla color="" title="XD" price="" /></div>
      <div class="property-rotate-left" id="17"><Casilla color="orange" title="PLAZA ST. JAMES" price="180" /></div>
      <div class="property-rotate-left" id="16"><Casilla color="" title="FERROCARRIL PENSSYLVANIA" price="" /></div>
      <div class="property-rotate-left" id="15"><Casilla color="purple" title="AV. VIRGINIA" price="160" /></div>
      <div class="property-rotate-left" id="14"><Casilla color="purple" title="AV. ESTADOS" price="140" /></div>
      <div class="property-rotate-left" id="13"><Casilla color="" title="COMPAÑÍA DE ELECTRICIDAD" price="150" /></div>
      <div class="property-rotate-left" id="12"><Casilla color="purple" title="PLAZA SAN CARLOS" price="140" /></div>
    </div>

    


    <div class="center-container">
        <button class="figuras-button" @click="togglePopup">Seleccionar Figuras</button>
        <div class="center-logo">
            <img src="@/assets/monopolylogo.png" alt="Monopoly Logo" />
            <div class="pop-up" v-if="Popup" >
                <FigurasMonopoly @close="togglePopup() " @select="toggleSelect"  />
            </div>
        </div>
        <div class="ruletaDado">
            <dados @diceRolled="movePieceBasedOnDice" />
        </div>
    </div>

    <!-- Ficha -->
   
    <div ref="ficha" class="ficha" :style="pieces[0].style" @click="movePiece(0)"> 
        <div class="figurinn">
            <div v-if="Figure != 'default'" >
                <img :src="Figure" alt="ficha" lass="animada"/>
            </div> <!-- Agregar variable de estado -->
        </div>
    </div>

    <div class="gray-background"></div>
    <button @click="goToMonopolyView">Volver a MonopolyView</button>
    <button @click="goToMonopolyView2">Ir a Monopoly View 2</button>

  <h1></h1>
</div>
    

    
  
</template>

<script>
import dados from './dados.vue';
import Casilla from '@/components/casillas.vue';
import FigurasMonopoly from './FigurasMonopoly.vue';


export default {
    name: "MonopolyView3",
    components: {
        dados,
        Casilla,
        FigurasMonopoly
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
            Popup: false,
            Figure: null
      
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
                this.$nextTick(() => {
                    this.$refs.ficha.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
            }
        },

        // Método para obtener el ID de la casilla basado en la posición de la ficha
        getCasillaIdFromPosition(position) {
            return position;
        },
        togglePopup() {
        this.Popup = !this.Popup;
        },
        // Método para navegar a la vista FigurasMonopoly
        irAFiguras() {
            this.$router.push({ name: 'FigurasMonopoly' });
        },
        
        goToMonopolyView() {
            this.$router.push({ name: 'MonopolyView' });
        },

        goToMonopolyView2() {
            this.$router.push({ name: 'MonopolyView2' });
        }


    }
};
</script>


<style scoped>

.center-container {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    z-index: 2; 
    position: relative; 
    grid-column: 5 / span 3; 
    grid-row: 4 / span 2; 
    background-color: rgba(117, 9, 112, 0.332);
    margin-block: 5%;
    padding: 5vw; 
    border-radius: 15px; 
}

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
    align-items: center;
    display: grid;
    width: 100vw; 
    height: 100vh; 
    max-width: 100%; 
    max-height: 100%; 
    padding: 0;
    margin: 0;
    gap: 0;
    box-sizing: border-box;
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
    z-index: 200;
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
    margin-bottom: 5%;
    position: relative;
    background-color: rgb(255, 0, 234);
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
    background-color: rgba(74, 9, 73, 0.562);
    grid-column: 1 / span 11;
    grid-row: 1 / span 11;
    pointer-events: none;
    z-index: -1;
}

video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover; /* Asegura que el video cubra toda la pantalla */
    z-index: -1; /* Envía el video detrás de los otros elementos */
}


</style>
