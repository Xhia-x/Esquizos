<template>
    <div class="contenedor">
      <div class="Dados-tirada" alt="tirada1">
        <!-- Primer dado -->
        <img :src="currentImage1.url" :alt="currentImage1.name" class="dado dado1" />
        <!-- Segundo dado -->
        <img :src="currentImage2.url" :alt="currentImage2.name" class="dado dado2" />
      </div>
      <button @click="startRolling">Lanzar Dados</button>
    </div>
    
    
  </template>
  
  <script>
import { ref } from 'vue'
import dice1 from '@/assets/dice1.png'
import dice2 from '@/assets/dice2.png'
import dice3 from '@/assets/dice3.png'
import dice4 from '@/assets/dice4.png'
import dice5 from '@/assets/dice5.png'
import dice6 from '@/assets/dice6.png'

export default {
  name: "dados-component",
  setup() {
    const images = ref([
      { id: 1, url: dice1, name: 'dado1' },
      { id: 2, url: dice2, name: 'dado2' },
      { id: 3, url: dice3, name: 'dado3' },
      { id: 4, url: dice4, name: 'dado4' },
      { id: 5, url: dice5, name: 'dado5' },
      { id: 6, url: dice6, name: 'dado6' },
    ])

    const currentImage1 = ref(images.value[0])
    const currentImage2 = ref(images.value[0])
    let rolling = ref(false)
    let currentTimeout = null

    const changeImage = (currentImage) => {
      const randomIndex = Math.floor(Math.random() * images.value.length)
      currentImage.value = images.value[randomIndex]
    }

    const rollDiceWithDeceleration = (timeElapsed = 0, intervalTime = 50) => {
      if (timeElapsed >= 5000) {
        rolling.value = false
        return
      }
      changeImage(currentImage1)
      changeImage(currentImage2)
      intervalTime = Math.min(1000, intervalTime + 50)
      currentTimeout = setTimeout(() => {
        rollDiceWithDeceleration(timeElapsed + intervalTime, intervalTime)
      }, intervalTime)
    }

    const startRolling = () => {
      if (rolling.value) return
      rolling.value = true
      if (currentTimeout) clearTimeout(currentTimeout)
      rollDiceWithDeceleration()
    }

    return { currentImage1, currentImage2, startRolling }
  }
}
</script>
  
  <style scoped>
  .Dados-tirada {
    display: flex;
    flex-direction: row; /* Los dados se mostrarán en fila */
    justify-content: center; /* Centra los dados horizontalmente */
    align-items: center; /* Alinea los dados verticalmente */
    margin-bottom: 20px; /* Espacio debajo de los dados */
    }
  .contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  .dado {
    display: inline-block;
    width: 30%;
    height: 30%;
    ;
  }
  .dado1 {
    margin-right: 20px; /* Añadimos espacio entre el dado 1 y el dado 2 */
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  