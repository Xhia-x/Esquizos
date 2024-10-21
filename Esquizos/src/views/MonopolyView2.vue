<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chelsea Market">
    
   <div class="monopoly-board">

    <div class="minecraftfondo">
        <img src="@/assets/minecraftfondo.webp" alt="Minecraft Fondo" />
    </div>
    <!-- Esquinas vacías -->
    <div class="corner top-left" id="21">
        <h1 class="carceletra1">De Paso</h1>
        <img src="@/assets/carcelM.webp" class="carcel" />
    </div>
    <div class="corner top-right" id="31">
        <h1 class="letrapolicia1">Ir al </h1>
        <img src="@/assets/policiaM.png" class="policia" />
        <h1 class="letrapolicia2">Portal</h1>
    </div>
    <div class="corner bottom-left" id="11">
        <h1 class="letrapolicia1">Parking </h1>
        <img src="@/assets/ParkingM.png" class="parking" />

    </div>
    <div class="corner bottom-right" id="1">
        <h1 class="LetraInicio">Start</h1>
        <img src="@/assets/StartM.png" class="Start" />
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
            <img src="@/assets/monopolylogoM.png" alt="Monopoly Logo" />
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
    

    <div class="minecraftfondo">
        <img src="@/assets/minecraftfondo.webp" alt="Minecraft Fondo" />
    </div>

    <button @click="goToMonopolyView">Volver a MonopolyView</button>
    <button @click="goToMonopolyView3">Ir a Monopoly View 3</button>
    <div class="gray-background"></div>
</div>
    

    
  
</template>

<script>
import dados from './dados.vue';
import Casilla from '@/components/casillas.vue';
import FigurasMonopoly from './FigurasMonopoly.vue';

export default {
    name: "MonopolyView2",
    components: {
        dados,
        Casilla,
        FigurasMonopoly,
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

        // Método para navegar a la vista FigurasMonopoly
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

        goToMonopolyView3() {
            this.$router.push({ name: 'MonopolyView3' });
        },


        async toggleSelect(figurename) {
            try {
        // Verificación antes de construir la URL
        if (!figurename) {
          console.error("El nombre de la figura es inválido.");
          return;
        }

        // Importación dinámica de la imagen
        const image = await import(`@/assets/${figurename}.png`);
        this.Figure = image.default || image;
        this.Popup = false;

        // Consola para verificar valores
        console.log("Figure URL: " + this.Figure); // Debería mostrar la URL correcta de la imagen
        console.log("Figure name: " + figurename);
        console.log("Figure name type: " + typeof(this.Figure));

      } catch (error) {
        console.error("Error cargando la imagen: ", error);
      }
    }

    }
};
</script>

<style scoped>



.pop-up{
    position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 32px 16px 120px;
  height: 100vh;
  width: 100%;
  background-color: rgba(82, 160, 126, 0.5);
  display: grid;
  place-items: center;
}

.center-container {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    z-index: 2; 
    position: relative; 
    grid-column: 5 / span 3; 
    grid-row: 4 / span 2; 
    background-color: rgba(255, 255, 255, 0.64);
    margin-block: 5%;
    padding: 5vw; 
    border-radius: 15px; 
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

.corner, .property-top, .property-bottom, .property-rotate-right, .property-rotate-left {
    width: 100%;
    height: 100%;
    background-color: white;
}


/* Logo centrado */
.center-logo {
    grid-column: 5 / span 3;
    grid-row: 4 / span 2; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: auto;
    z-index: 2; 
}

.center-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

/* Ruleta y dado */
.ruletaDado {
    grid-column: 5 / span 3;
    grid-row: 6 / span 2; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    z-index: 1; 
    margin-top: 20px; 
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
  grid-template-columns: repeat(9, 170px); /* Ajusta el tamaño para que coincida con las esquinas */
  justify-items: stretch;
  align-items: center; /* Alinea el contenido de las casillas */
}


.bottom-side {
  grid-column: 2 / span 9; /* Se asegura que las casillas ocupen 9 columnas */
  grid-row: 11; /* Ajusta la fila inferior del tablero */
  display: grid;
  grid-template-columns: repeat(9, 170px); /* Asegura que las casillas tengan el tamaño adecuado */
  justify-items: stretch;
  align-items: center; /* Alinea el contenido de las casillas */
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
    background-color: lightgray;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.property-top {
  transform: rotate(180deg); /* Casillas superiores mirando hacia abajo */
  width: 170px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border: 1px solid lightgray;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.property-bottom {
  width: 170px;
  height: 170px;
  background-color: lightgray;
  border: 1px solid lightgray;
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



/* Ficha */
.ficha {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 96px;
    width: 96px;
    animation: rotate_3922 10s linear infinite;
    background-color: #9b59b6;
    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
    transform-origin: center;
    z-index: 500;
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



.contendor {
    display: flex;
    justify-content: center;
    align-items: center;
    /* tamaño del tablero */
    width: 100vw;
    height: 100%;
}


/* Estilo para el botón Figuras */
.figuras-button {
    margin-bottom: 5%;
    position: relative;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.figuras-button:hover {
    background-color: rgb(201, 6, 6);
}

.ficha-imagen {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: -1; /* Colocar la imagen por encima de la ficha base */
}

img{
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
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
}

.letrapolicia2 {
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
}

.Start {
    width: 60%;
    height: 60%;
    transform: rotate(-130deg);
}

.LetraInicio {
    font-family: 'Pixelify Sans', sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin: 0;
    margin-right: 15%;
    margin-top: 18%;
    transform: rotate(-50deg);
    color: #b88520f7;
}

.parking {
    width: 100%;
    height: 100%;

}

.carcel {
    width: 120%;
    height: 100%;
    rotate: 45deg;
    margin-left: 24%;
    margin-top: 4%;

}

.carceletra1 {
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 40px;
    margin: 0;
    font-weight: bold;
}

.gray-background {
    background-color: lightgray;
    grid-column: 1 / span 11;
    grid-row: 1 / span 11;
    pointer-events: none;
    z-index: -1;
}

.minecraftfondo {
    background-color: lightgray;
    grid-column: 1 / span 11;
    grid-row: 1 / span 11;
    pointer-events: none;
    z-index: -20;
}
.figurinn {

    width:1%; /* Ajusta el ancho de la figura */
  height: 1%; /* Ajusta la altura de la figura */
  position: absolute;
  top: -100px;
  left: -200px;
  border-radius: 50%;
 
}


</style>
