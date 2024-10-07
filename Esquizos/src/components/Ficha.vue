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
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pieces: [], // Arreglo de fichas con sus posiciones
      step: 20 // Paso de movimiento de las fichas
    };
  },
  methods: {
    // Añadir una nueva ficha
    addPiece() {
      this.pieces.push({
        top: 50,
        left: 50,
        style: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      });
    },
    // Mover una ficha específica al hacer clic
    movePiece(index) {
      const directions = ['up', 'down', 'left', 'right'];
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const piece = this.pieces[index];

      switch (direction) {
        case 'up':
          piece.top = Math.max(0, piece.top - this.step);
          break;
        case 'down':
          piece.top = Math.min(100, piece.top + this.step);
          break;
        case 'left':
          piece.left = Math.max(0, piece.left - this.step);
          break;
        case 'right':
          piece.left = Math.min(100, piece.left + this.step);
          break;
      }

      // Actualizar el estilo de la ficha
      piece.style = {
        top: piece.top + '%',
        left: piece.left + '%',
        transform: 'translate(-50%, -50%)'
      };
    }
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
