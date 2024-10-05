<template>
    <div class="level-selector-wrapper">
      <div class="level-selector">
        <div class="level" v-for="level in levels" :key="level.id">
          <img :src="require(`@/assets/${level.image}`)" :alt="level.name" class="level-image" />
          <h3>{{ level.name }}</h3>
          <button @click="selectLevel(level.id)">Seleccionar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        levels: [
          { id: 1, name: "Nivel 1", image: "tablero1.png" },
          { id: 2, name: "Nivel 2", image: "tablero2.png" },
          { id: 3, name: "Nivel 3", image: "tablero3.png" },
          { id: 4, name: "Nivel 4", image: "tablero4.png" },
        ],
      };
    },
    methods: {
      selectLevel(id) {
        alert(`Nivel ${id} seleccionado`);
      },
    },
  };
  </script>
  
  <style scoped>
  .level-selector-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.6); /* Fondo oscuro y semitransparente */
  }
  
  .level-selector {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco y semitransparente */
    border-radius: 10px;
  }
  
  .level {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    max-width: 300px;
    margin: auto;
  }
  
  .level:hover {
    transform: scale(1.05);
  }
  
  .level-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  