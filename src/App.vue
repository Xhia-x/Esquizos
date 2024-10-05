<template>
  <div id="app">
    <header>
      <h1>Bienvenido a Vue.js</h1>
    </header>
    <main>
      <p>Este es un ejemplo básico de App.vue</p>
    </main>
    

  </div>
  <Reglas>    
  </Reglas>
 
</template>

<script>
import Reglas from './components/Reglas.vue'
impo


export default {
  name: 'App',
  components: {
    Reglas

  }

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

main {
  margin: 20px;
}
</style>
