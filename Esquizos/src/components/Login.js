import Swal from 'sweetalert2';

export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        recuerdame: false,
      };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('http://localhost:3000/login', {
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
            this.errorMessage = 'Usuario o contraseña incorrectos';
            return;
          }
          localStorage.setItem('user', response.username);
          this.errorMessage = '';
          Swal.fire({
            title: "Sesión iniciada",
            icon: "success"
          });
        } catch (error) {
          this.errorMessage = 'Error al iniciar sesión: ' + error.message;
        }
      },
    },
  };
  