<template>
  <div class="home">
    <img alt="Monopoly" src="../assets/monopolylogo.png">
    <form @submit="Submit" method="get">
      <input type="email" placeholder="Enter Email" class="input" v-model="form.email" required>
      <br><br>
      <input type="password" placeholder="Enter Password" class="input" v-model="form.password" required>
      <br><br>
      <button type="submit" class="input">Let's go →</button>
    </form>
    <br>
    {{ $store.state.email }}
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async Submit(event) {
      event.preventDefault();
      try {
        // Obtener todos los usuarios (No recomendado)
        const response = await axios.get('http://localhost:7000/api/Login/logeo');
        const users = response.data;

        // Buscar el usuario ingresado
        const user = users.find(user => user.email === this.form.email);
        if (!user) {
          alert('Usuario no encontrado');
          return;
        }

        // Comparar contraseñas
        const isMatch = users.find(user => user.password === this.form.password);
        if (!isMatch) {
          alert('Contraseña incorrecta');
          return;
        }

        // Autenticación exitosa
        this.$store.commit('login', this.form.email);
        alert('Inicio de sesión exitoso');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Ocurrió un error al iniciar sesión');
      }
    }
  }
}
</script>

<style>
.input {
  font-family: "SF Pro";
  max-width: 190px;
  padding: 0.875rem;
  font-size: 1rem;
  border: 1.5px solid #000;
  border-radius: 0.5rem;
  box-shadow: 2.5px 3px 0 #000;
  outline: none;
  transition: ease 0.25s;
}
.input:focus {
  box-shadow: 5.5px 7px 0 black;
}

.button-confirm {
  margin: 50px auto 0 auto;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
}
</style>
