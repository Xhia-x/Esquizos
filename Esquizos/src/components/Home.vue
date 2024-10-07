<template>
  <body>
    <div class="container vh-100 d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center">
          <a href="/crearPartida" class="link-offset-2 link-underline link-underline-opacity-0">
            <div class="card shadow p-4 col-md-4">
              <img class="img-thumbnail" src="https://ae01.alicdn.com/kf/S40076f46e889430794c308a68f8bccd7a/P-ster-de-dibujos-animados-Mr-Monopoly-Big-Rich-Man-pintura-en-lienzo-dinero-arte-de.jpg">
              <h2>Crear partida</h2>
            </div>
          </a>
          <a class="link-offset-2 link-underline link-underline-opacity-0">
            <div class="card shadow p-4 col-md-4">
              <img class="img-thumbnail" src="https://ae01.alicdn.com/kf/S5647db58d8c6430786562d968f2e9348E/P-ster-de-dibujos-animados-Mr-Monopoly-Big-Rich-Man-pintura-en-lienzo-dinero-arte-de.jpg">
              <h2>Unirse a partida</h2>
            </div>
          </a>
        </div>
    </div>
  </body>
  </template>



<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>



<style scoped>

.a{
  margin: 20%;
}

.d-flex {
  align-items: center;
  width: 100%; 
  margin: auto;
}

.card:hover {filter: sepia(40%);}

.img {
    width: 10%;
    height: auto;
}

body {
  background: none;
  position: relative;
}

.card {
  display: flex;
  position: relative;
  border-radius: 0;
  height: auto;
  max-width: 90%;
  width: 65%; 
  text-align: center;
  margin: 2%; 
  transition: all 0.3s ease;
}

.text-primary {
  color: red !important;
}

.btn{
  background-color: red;
  margin: 10%;
}

video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
    z-index: -210;
    object-fit: cover;
  }

</style>

