<template>
    <div class="monopoly-board">
      <!-- Esquinas vacías -->
      <div class="corner top-left"></div>
      <div class="corner top-right"></div>
      <div class="corner bottom-left"></div>
      <div class="corner bottom-right"></div>
  
      <!-- Lado superior (casillas vacías) -->
      <div class="side top-side">
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
      </div>
  
      <!-- Lado derecho (casillas vacías) -->
      <div class="side right-side">
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
      </div>
  
      <!-- Lado inferior (casillas vacías) -->
      <div class="side bottom-side">
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
        <div class="property"><Casilla /></div>
      </div>
  
      <!-- Lado izquierdo (casillas vacías) -->
      <div class="side left-side">
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
        <div class="property"></div>
      </div>
      <!-- Logo centrado -->
      <div class="center-logo">
      <img src="@/assets/monopolylogo.png" alt="Monopoly Logo" />
      </div>

      
      <div class="ruletaDado">
        <dados />
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
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
  width: 2000px; /* Incrementa el tamaño del tablero */
  height: 1600px; /* Ajusta el tamaño a 1600px de alto */
  border: 2px solid black;
  position: relative;
}


  
  .corner {
    background-color: lightgray;
    border: 2px solid black;
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
  
  .side {
    display: flex;
    justify-content: space-between;
  }
  
  .top-side {
    grid-column: 2 / span 9;
    grid-row: 1;
    display: flex;
    justify-content: space-evenly;
  }
  
  .right-side {
    grid-column: 1;
    grid-row: 2 / span 9;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  
  .bottom-side {
    grid-column: 2 / span 9;
    grid-row: 11;
    display: flex;
    justify-content: space-evenly;
  }
  
  .left-side {
    grid-column: 11;
    grid-row: 2 / span 9;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  
  .property {
    width: 170px;
    height: 230px;
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;

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
  margin-bottom: 50%;
}
.ruletaDado {
  grid-column: 5 / span 3;
  grid-row: 5 / span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; /* Asegura que los dados estén en fila */
  gap: 20px; /* Espacio entre los dados */
  margin-top: 50%;
  
}
  </style>
  