<template>
  <div class="contenedor">
    <div class="Dados-tirada">
      <!-- Primer dado -->
      <img :src="currentImage1.url" :alt="currentImage1.name" class="dado dado1" />
      <!-- Segundo dado -->
      <img :src="currentImage2.url" :alt="currentImage2.name" class="dado dado2" />
    </div>
    <button v-if="mostrarLanzarDados" @click="startRolling">Lanzar Dados</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { io } from 'socket.io-client'
import dice1 from '@/assets/dice1.png';
import dice2 from '@/assets/dice2.png';
import dice3 from '@/assets/dice3.png';
import dice4 from '@/assets/dice4.png';
import dice5 from '@/assets/dice5.png';
import dice6 from '@/assets/dice6.png';


const images = ref([
  { id: 1, url: dice1, name: 'dado1' },
  { id: 2, url: dice2, name: 'dado2' },
  { id: 3, url: dice3, name: 'dado3' },
  { id: 4, url: dice4, name: 'dado4' },
  { id: 5, url: dice5, name: 'dado5' },
  { id: 6, url: dice6, name: 'dado6' },
]);

const usuario = localStorage.getItem('user') || sessionStorage.getItem('user');
const socket = io('http://localhost:9992');
// Función para emitir el evento de lanzamiento de dados
const emitRollDice = (dice1Value, dice2Value) => {
  const partidaActual = window.location.pathname.split('/').pop();
  socket.emit('rollDice', { user: localStorage.getItem('user') || sessionStorage.getItem('user'), dice1: dice1Value, dice2: dice2Value, partida: partidaActual });
};

// Función para inicializar el socket
const initializeSocket = (currentImage1, currentImage2, mostrarLanzarDados) => {
  socket.on('diceRolled', (data) => {
    currentImage1.value = images.value[data.dice1 - 1];
    currentImage2.value = images.value[data.dice2 - 1];
    
  });
  socket.on("turnoActual", (data) => {
    
    const { actual } = data;
    console.log("turnoActual: "+actual);
    if(actual == usuario){
      mostrarLanzarDados.value = true;
    } else {
      mostrarLanzarDados.value = false;
    }
  });
};

export default {
  name: "dados-component",
  emits: ['diceRolled'],
  setup(props, { emit }) {
    const currentImage1 = ref(images.value[0]);
    const currentImage2 = ref(images.value[0]);
    const rolling = ref(false);
    let currentTimeout = null;

    let finalDice1 = 1;
    let finalDice2 = 1;
    const mostrarLanzarDados = ref(false);

    onMounted(() => {
      const partidaActual = window.location.pathname.split('/').pop(); 
      socket.emit('joinPartida', partidaActual);
      initializeSocket(currentImage1, currentImage2, mostrarLanzarDados, emit);
      
    });

    const changeImage = (currentImage) => {
      const randomIndex = Math.floor(Math.random() * images.value.length);
      currentImage.value = images.value[randomIndex];
      return randomIndex + 1; // El valor de la cara del dado
    };

    const rollDiceWithDeceleration = (timeElapsed = 0, intervalTime = 1) => {
      if (timeElapsed >= 5000) {
        rolling.value = false;
        emitRollDice(finalDice1, finalDice2);  // Emitimos los valores finales cuando la animación termina
        //emit('diceRolled', finalDice1, finalDice2); 
        emit('diceRolled', finalDice1+ finalDice2);
        return;
      }

      // Cambiamos las imágenes de los dados
      finalDice1 = changeImage(currentImage1); // Guardamos el valor final del dado 1
      finalDice2 = changeImage(currentImage2); // Guardamos el valor final del dado 2

      emitRollDice(finalDice1, finalDice2); // Emitir los valores de los dados
      intervalTime = Math.min(500, intervalTime + 5)
      currentTimeout = setTimeout(() => {
        rollDiceWithDeceleration(timeElapsed + intervalTime, intervalTime);
      }, intervalTime);
    };

    const startRolling = () => {
      if (rolling.value) return;
      rolling.value = true;
      if (currentTimeout) clearTimeout(currentTimeout);
      rollDiceWithDeceleration();
    };

    return { currentImage1, currentImage2, startRolling, mostrarLanzarDados };
  }
};
</script>

<style>
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.Dados-tirada {
  display: flex;
  justify-content: center;
  gap: 20px; /* Espacio entre los dados */
}

.dado {
  width: 150px; /* Ajusta el tamaño del dado */
  height: 150px;
  object-fit: contain; /* Asegura que las imágenes mantengan sus proporciones */
}

button {
  padding: 10px 20px;
  background-color: #9c1616c2;
  color: white;
  border: 1px solid #F8E8A0;
  cursor: pointer;
  border-radius: 10px;
  color: #F8E8A0;
}

button:hover {
  background-color: #8a1616c2;
}


</style>
