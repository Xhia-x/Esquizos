<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from './components/LoginPage.vue'

export default {
  components: {
    Login
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10vh;
}
</style>
