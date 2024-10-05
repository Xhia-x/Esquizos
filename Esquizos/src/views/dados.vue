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
  
  export default {
    name: "dados-component",
    setup() {
      const images = ref([
        { id: 1, url: require('@/assets/dice1.png'), name: 'dado1' },
        { id: 2, url: require('@/assets/dice2.png'), name: 'dado2' },
        { id: 3, url: require('@/assets/dice3.png'), name: 'dado3' },
        { id: 4, url: require('@/assets/dice4.png'), name: 'dado4' },
        { id: 5, url: require('@/assets/dice5.png'), name: 'dado5' },
        { id: 6, url: require('@/assets/dice6.png'), name: 'dado6' },
      ])
  
      // Estado para los dos dados
      const currentImage1 = ref(images.value[0])
      const currentImage2 = ref(images.value[0])
  
      let rolling = ref(false)
      let currentTimeout = null
  
      // Función para seleccionar una imagen aleatoria para un dado
      const changeImage = (currentImage) => {
        const randomIndex = Math.floor(Math.random() * images.value.length)
        currentImage.value = images.value[randomIndex]
      }
  
      // Función para detener los dados después de un tiempo con desaceleración
      const rollDiceWithDeceleration = (timeElapsed = 0, intervalTime = 50) => {
        if (timeElapsed >= 5000) {
          rolling.value = false
          return
        }
  
        // Cambiar la imagen de ambos dados
        changeImage(currentImage1)
        changeImage(currentImage2)
  
        // Aumentamos gradualmente el intervalo para simular la desaceleración
        intervalTime = Math.min(1000, intervalTime + 50)
        currentTimeout = setTimeout(() => {
          rollDiceWithDeceleration(timeElapsed + intervalTime, intervalTime)
        }, intervalTime)
      }
  
      // Función que inicia el lanzamiento de ambos dados
      const startRolling = () => {
        if (rolling.value) return
        rolling.value = true
  
        // Si hay un timeout activo, lo limpiamos antes de iniciar otro
        if (currentTimeout) {
          clearTimeout(currentTimeout)
        }
  
        // Iniciamos el proceso de desaceleración para ambos dados
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
  