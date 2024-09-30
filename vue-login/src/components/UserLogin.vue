<template>
  <div class="login-page">
    <!-- Contenedor de la mitad izquierda con el formulario de login -->
    <div class="left-section">
      <!-- Logo que redirige a la página de login -->
      <router-link to="/">
        <img src="@/assets/logono.png" alt="Logo" class="logo" />
      </router-link>
      <div class="login-container">
        <h2>Login</h2>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <!-- Botón para registrarse que redirige al registro -->
        <router-link to="/register" class="register-link">No tienes una cuenta? Registrate aqui</router-link>
      </div>
    </div>

    <!-- Contenedor de la mitad derecha con la imagen y fondo degradado -->
    <div class="right-section">
      <img src="@/assets/monopoly.png" alt="Monopoly" class="monopoly-image" />
    </div>
  </div>
</template>

<style scoped>
/* Estilo general de la página de login */
.login-page {
  display: flex;
  height: 100vh;
}

/* Sección izquierda (Formulario de Login) */
.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #333;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
  height: auto;
}

.login-container {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  color: white;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 98%;
  padding: 8px;
  border-radius: 5px;
  border: none;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #00b35f;
}

/* Estilo del enlace para registrarse */
.register-link {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

/* Sección derecha (Imagen y fondo degradado rosa) */
.right-section {
  flex: 1;
  background: linear-gradient(45deg, #ff69b4, #ffb6c1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.monopoly-image {
  width: 80%;
  height: auto;
  object-fit: contain;
}
</style>
