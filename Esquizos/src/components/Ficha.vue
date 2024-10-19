<template>
  <div>
    <button @click="addPiece">Añadir Ficha</button>
    <div class="board">
      <div
        class="container"
        v-for="(piece, index) in pieces"
        :key="index"
        :style="piece.style"
        @click="movePiece(index)"
      >
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref } from 'vue';
import { io } from 'socket.io-client'

const socket = io('http://localhost:9992');
// Función para emitir el evento de lanzamiento de dados
const emitMoverFicha = (ficha, index) => {
  const partidaActual = window.location.pathname.split('/').pop();
  console.log('Emitiendo evento moverFicha usuario:', localStorage.getItem('user'));
  socket.emit('moverFicha', { ficha: ficha, indice: index,user: localStorage.getItem('user') || sessionStorage.getItem('user'), partida: partidaActual });
};

// Función para inicializar el socket
const initializeSocket = (pieces) => {
  socket.on('movimientoGenerado', (data) => {
    const { ficha, indice } = data;
    pieces.value[indice] = ficha;
  });
};

export default {
  setup() {
    const pieces = ref([]); // Arreglo de fichas con sus posiciones
    const step = 20 // Paso de movimiento de las fichas

    onMounted(() => {
      const partidaActual = window.location.pathname.split('/').pop(); 
      socket.emit('joinPartida', partidaActual);
      initializeSocket(pieces);

      socket.on('diceRolled', (data) => {
        const steps = data.dice1 + data.dice2; // Sumar los valores de los dados
        movePieceByDice(steps); // Llamamos a la función para mover la ficha
      });
    });
  

    const addPiece = () => {
      pieces.value.push({
        top: 50,
        left: 50,
        style: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      });
    };

    const movePiece = (index) => {
      const directions = ['up', 'down', 'left', 'right'];
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const piece = pieces.value[index];

      switch (direction) {
        case 'up':
          piece.top = Math.max(0, piece.top - step);
          break;
        case 'down':
          piece.top = Math.min(100, piece.top + step);
          break;
        case 'left':
          piece.left = Math.max(0, piece.left - step);
          break;
        case 'right':
          piece.left = Math.min(100, piece.left + step);
          break;
      }

      // Actualizar el estilo de la ficha
      piece.style = {
        top: piece.top + '%',
        left: piece.left + '%',
        transform: 'translate(-50%, -50%)'
      };

      emitMoverFicha(piece, index); // Emitir los valores de los movimientos al servidor
    };

    const movePieceByDice = (steps) => {
      const index = 0; // Puedes elegir la ficha a mover según tu lógica
      if (pieces.value[index]) {
        const currentPiece = pieces.value[index];

        // Mover la ficha en el tablero
        currentPiece.left += steps * step; // Mover a la derecha
        currentPiece.style.left = `${currentPiece.left}px`;
      }
    };

    return { pieces, addPiece, movePiece };
  }
};

</script>

<style scoped>
/* Contenedor del tablero */
.board {
  position: relative;
  width: 500px;
  height: 500px;
  margin-top: 20px;
}

/* Estilos para las fichas */
.container {
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

</style>
