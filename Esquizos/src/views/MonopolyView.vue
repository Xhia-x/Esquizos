

<template>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto Mono"></link>


  <div class="contendor">
    <div class="monopoly-board">
      <!-- Esquinas vacías -->
       <!-- Casilla de carcel -->
      
      <div class="corner top-left">
        
        <h1 class="carceletra1">De Paso</h1>
        <img src="@/assets/carcel.png" class="carcel"/>
        
      </div>
      
      <!-- Casilla de Policia -->
      <div class="corner top-right">
        
        <h1 class="letrapolicia1" >Ir a la </h1>
        <img src="@/assets/policia.png" class="policia"/> 
        <h1 class="letrapolicia2">carcel</h1>
        
      </div>
      <!-- Casilla de parking -->
      <div class="corner bottom-left">
        <img src="@/assets/Parking.png" class="parking"/> 
      </div>
      <!-- Casilla de inicio -->
      <div class="corner bottom-right">
        <h1 class="LetraInicio">Start</h1>
        <img src="@/assets/Start.png" class="Start" />
      </div>

      <!-- Lado superior -->
      <div class="side top-side">
        <div class="property-top"><Casilla /></div>
        <div class="property-top"><Casilla /></div>
        <div class="property-top"><Casilla /></div>
        <div class="property-top"><Casilla /></div>
        <div class="property-top"><Casilla /></div>
        <div class="property-top"><Casilla /></div>
        <div class="property-top"><Casilla /></div>
        <div class="property-top"><Casilla /></div>
        <div class="property-top"><Casilla /></div>
      </div>

      <!-- Lado derecho -->
      <div class="side right-side">
        <div class="property-rotate-right"><Casilla /></div>
        <div class="property-rotate-right"><Casilla /></div>
        <div class="property-rotate-right"><Casilla /></div>
        <div class="property-rotate-right"><Casilla /></div>
        <div class="property-rotate-right"><Casilla /></div>
        <div class="property-rotate-right"><Casilla /></div>
        <div class="property-rotate-right"><Casilla /></div>
        <div class="property-rotate-right"><Casilla /></div>
        <div class="property-rotate-right"><Casilla /></div>
      </div>

      <!-- Lado inferior -->
      <div class="side bottom-side">
        <div class="property-bottom"><Casilla /></div>
        <div class="property-bottom"><Casilla /></div>
        <div class="property-bottom"><Casilla /></div>
        <div class="property-bottom"><Casilla /></div>
        <div class="property-bottom"><Casilla /></div>
        <div class="property-bottom"><Casilla /></div>
        <div class="property-bottom"><Casilla /></div>
        <div class="property-bottom"><Casilla /></div>
        <div class="property-bottom"><Casilla /></div>
      </div>

      <!-- Lado izquierdo -->
      <div class="side left-side">
        <div class="property-rotate-left"><Casilla /></div>
        <div class="property-rotate-left"><Casilla /></div>
        <div class="property-rotate-left"><Casilla /></div>
        <div class="property-rotate-left"><Casilla /></div>
        <div class="property-rotate-left"><Casilla /></div>
        <div class="property-rotate-left"><Casilla /></div>
        <div class="property-rotate-left"><Casilla /></div>
        <div class="property-rotate-left"><Casilla /></div>
        <div class="property-rotate-left"><Casilla /></div>
      </div>

      <!-- Logo centrado -->
      <div class="center-logo">
        <img src="@/assets/monopolylogo.png" alt="Monopoly Logo" />
      </div>
      <div class="gray-background"></div>
      <div class="ruletaDado">
        <dados />
      </div>
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

.top-side, .bottom-side {
  grid-column: 2 / span 9;
  display: grid;
  grid-template-columns: repeat(9, 170px); /* Asegura que las casillas coincidan con las esquinas */
}

.right-side, .left-side {
  grid-row: 2 / span 9;
  display: grid;
  grid-template-rows: repeat(9, 170px); /* Asegura que las casillas coincidan con las esquinas */
  justify-items: stretch;
  align-items: center; /* Asegura que las casillas laterales estén alineadas con las esquinas */
}

.right-side {
  grid-column: 11;
  margin-left: 28px; /* Mueve hacia la derecha */
}

.left-side {
  grid-column: 1;
  margin-left: 33px; /* Mueve hacia la derecha */
}

/* Casillas con tamaño fijo */
.property-top, .property-bottom, .property-rotate-right, .property-rotate-left {
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
  transform: rotate(180deg); /* Casillas superiores mirando hacia abajo */
}

.property-rotate-right {
  transform: rotate(-90deg); /* Casillas laterales derechas mirando hacia la izquierda */
}

.property-rotate-left {
  transform: rotate(90deg); /* Casillas laterales izquierdas mirando hacia la derecha */
}


/* Alineación de las casillas superiores e inferiores */
.top-side {
  grid-column: 2 / span 9;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(9, 170px); /* Ajusta el tamaño para que coincida con las esquinas */
  justify-items: stretch;
  align-items: center; /* Alinea el contenido de las casillas */
}

.bottom-side {
  grid-column: 2 / span 9;
  grid-row: 11;
  display: grid;
  grid-template-columns: repeat(9, 170px); /* Ajusta el tamaño para que coincida con las esquinas */
  justify-items: stretch;
  align-items: center; /* Alinea el contenido de las casillas */
}

/* Alineación de las casillas laterales con las esquinas */
.left-side, .right-side {
  grid-template-rows: repeat(9, 170px); /* Ajusta el tamaño para que coincida con las esquinas */
  justify-items: stretch;
  align-items: center;
}

/* Mover las casillas del lado derecho más a la izquierda */
.right-side .property {
  grid-column-start: 11; /* Ajustar esta propiedad para moverlas más cerca o lejos */
}

/* Mover las casillas del lado izquierdo más a la derecha */
.left-side .property {
  grid-column-start: 1; /* Ajustar esta propiedad para moverlas más cerca o lejos */
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

  .ruletaDado {
    grid-column: 5 / span 3;
    grid-row: 7; /* Cambia a una fila más baja para mover los dados hacia abajo */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 100px; /* Agrega un margen superior para ajustar la posición si es necesario */
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
