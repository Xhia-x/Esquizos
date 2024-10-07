<template>
<div id="app">
    <video src="./assets/video.mp4" autoplay="true" muted="true" loop="true"></video>

    <router-view />
</div>
</template>

<script>

export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    background: none;
    position: relative;
    margin: 0;
}

video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
    z-index: -210;
}

/* Nuevo estilo para el botón */
.nav {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}
</style>
