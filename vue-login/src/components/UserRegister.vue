<template>
  <div class="register-page">
    <div class="left-section">
      <router-link to="/">
        <img src="@/assets/logono.png" alt="Logo" class="logo" />
      </router-link>
      <div class="register-container">
        <h2>Register</h2>
        <form @submit.prevent="registerUser"> <!-- Llama a registerUser al enviar el formulario -->
          <div class="form-group">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" v-model="fullname" required />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    <div class="right-section">
      <img src="@/assets/monopoly.png" alt="Monopoly" class="monopoly-image" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async registerUser() {
  if (this.password !== this.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  try {
    const response = await fetch('http://localhost:5038/api/USERS/AddUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        password: this.password
      })
    });

    const data = await response.json();
    if (!response.ok) {
      // Si hay un error en la respuesta, muestra el mensaje
      throw new Error(data.message || "Registration failed");
    }
    alert(data.message);
    this.router.push('/'); // Redirige a la página de inicio de sesión
  } catch (error) {
    console.error("Error:", error); // Registra el error completo
    alert("An error occurred during registration: " + error.message); // Muestra el mensaje del error
  }
}

  }
};
</script>


<style scoped>
/* Estilo general de la página de registro */
.register-page {
  display: flex;
  height: 100vh;
}

/* Sección izquierda (Formulario de Registro) */
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

/* Contenedor del formulario de registro */
.register-container {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  color: white;
}

.register-container h2 {
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
input[type="email"],
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
