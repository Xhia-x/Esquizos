<template>
  <div class="contenedor">
    <div class="Dados-tirada">
      <!-- Primer dado -->
      <img :src="currentImage1.url" :alt="currentImage1.name" class="dado dado1" />
      <!-- Segundo dado -->
      <img :src="currentImage2.url" :alt="currentImage2.name" class="dado dado2" />
    </div>
    <button @click="startRolling">Lanzar Dados</button>
  </div>
</template>

<script>
import { ref } from 'vue';
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

    const changeImage = (currentImage) => {
      const randomIndex = Math.floor(Math.random() * images.value.length);
      currentImage.value = images.value[randomIndex];
      return randomIndex + 1; // El valor de la cara del dado
    };

    const rollDiceWithDeceleration = (timeElapsed = 0, intervalTime = 50) => {
      if (timeElapsed >= 5000) {
        rolling.value = false;
        emit('diceRolled', finalDice1 + finalDice2); // Emitimos los valores finales cuando la animación termina
        return;
      }

      // Cambiamos las imágenes de los dados
      finalDice1 = changeImage(currentImage1); // Guardamos el valor final del dado 1
      finalDice2 = changeImage(currentImage2); // Guardamos el valor final del dado 2

      // Incrementamos el tiempo de espera entre cambios para crear el efecto de desaceleración
      intervalTime = Math.min(1000, intervalTime + 50);

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

    return { currentImage1, currentImage2, startRolling };
  }
};
</script>
