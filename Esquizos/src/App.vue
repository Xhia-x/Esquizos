<template>
  <div id="app">
    <!-- Llama al componente MonopolyView -->
     <MonopolyView />
      
  </div>
</template>

<script>
// Importa el componente MonopolyView desde la carpeta 'views'
  import MonopolyView from './views/MonopolyView.vue';
  //import dados from './views/dados.vue';
export default {
  name: 'App',
  components: {
     // Registra el componente aquí
     MonopolyView 
      //dados
     
  }
}
</script>

<style>
/* Agrega tus estilos globales aquí */
</style>
