<template>
  <div class="login">
    <div class="container">
      <div class="informacion">
        <h1>Monopoly Online</h1>
        <p>Invita amigos y disfruten la experiencia online.</p>
      </div>
      <div class="form-container">
        <div class="formulario">
          <form @submit.prevent="login">
            <div class="ingresoUsuario">
              <label for="username">Usuario o Correo Electrónico</label>
              <input type="text" class="campoTexto" v-model="username" required />
            </div>
            <div class="ingresoContrasena">
              <label for="password">Contraseña</label>
              <input type="password" class="campoTexto" v-model="password" required />
            </div>
            <div class="recuerdame">
              <input type="checkbox" id="recuerdame" />
              <label for="recuerdame">Recuérdame</label>
            </div>
            <button type="submit" class="botonInicioSesion">Iniciar Sesión</button>
            <div class="errorInicio">
              <p v-if="errorMessage">{{ errorMessage }}</p>
            </div>
            
          </form>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script src="./Login.js"></script>

<style src="./Login.css"></style>
