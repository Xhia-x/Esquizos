<template>
  <div id="app">
    <!-- Llama al componente MonopolyView -->
    <MonopolyView />
  </div>
</template>

<script>
// Importa el componente MonopolyView desde la carpeta 'views'
import MonopolyView from './views/MonopolyView.vue';

export default {
  name: 'App',
  components: {
    MonopolyView // Registra el componente aquí
  }
}
</script>

<style>
/* Agrega tus estilos globales aquí */
</style>
