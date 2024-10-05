<template>
  <div id="app" class="center-page">
    <form @submit.prevent="login" class="form">
      <h2 id="heading">Iniciar Sesión</h2>
      
      <div class="field">
        <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <input
          type="text"
          v-model="username"
          placeholder="Usuario"
          required
          class="input-field"
        />
      </div>

      <div class="field">
        <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
        <input
          type="password"
          v-model="password"
          placeholder="Contraseña"
          required
          class="input-field"
        />
      </div>

      <div class="btn">
        <button type="submit" class="button1">Iniciar</button>
        <button type="button" class="button2" @click="resetForm">Limpiar</button>
      </div>

      <div class="btn">
        <button type="button" class="button3" @click="logout">Cerrar Sesión</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
      errorMessage: ''
    };
  },
  methods: {
   async login() {
      try {
        const response = await fetch('http://localhost:7000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
          });
        if (!response.ok) {
            //const error = await response.text();
            alert('Usuario o contraseña incorrectos');
            this.errorMessage = 'Usuario o contraseña incorrectos';
            return;
          }
          alert('Inicio de sesión exitoso');
        
        this.isAuthenticated = true;
        this.errorMessage = '';
      
      } catch (error) {
        console.error('Error al iniciar sesión:', error.response.data);
      }

   
    },
    logout() {
      this.isAuthenticated = false;
      this.username = '';
      this.password = '';
    },
    resetForm() {
      this.username = '';
      this.password = '';
    }
  }
};
</script>

<style scoped>
/* From Uiverse.io by Praashoo7 */
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.4em;
  background-color: #171717;
  border-radius: 25px;
  transition: .4s ease-in-out;
}

.form:hover {
  transform: scale(1.05);
  border: 1px solid black;
}

#heading {
  text-align: center;
  margin: 2em;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}

.field {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: white;
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #d3d3d3;
}

.form .btn {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5em;
}

.button1 {
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 5px;
  margin-right: 0.5em;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: #252525;
  color: white;
}

.button1:hover {
  background-color: black;
  color: white;
}

.button2 {
  padding: 0.5em;
  padding-left: 2.3em;
  padding-right: 2.3em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: #252525;
  color: white;
}

.button2:hover {
  background-color: black;
  color: white;
}

.button3 {
  margin-bottom: 3em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: #252525;
  color: white;
}

.button3:hover {
  background-color: red;
  color: white;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
