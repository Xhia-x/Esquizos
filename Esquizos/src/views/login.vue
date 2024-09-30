<template>

    <form class="form">
        <span class="heading">Inicio de sesión</span>

        <span class="Mail">Correo</span>
        <input placeholder="Ingresa un correo" type="text" class="input" />
        <span class="Password">Contraseña</span>
        <input placeholder="Ingresa una contraseña" type="text" class="input" />
        <span class="forgot"><a href="">Olvidaste tu contraseña?</a></span>
        <button>Ingresar</button>
    </form>

</template>


<style>
    .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #5eead4;
    padding: 60px;
    padding-inline: 28px;
    border-radius: 20px;
    box-shadow: 4px 4px rgb(0, 2, 65);
    font-family: cursive;
    }

    .heading {
    font-size: 25px;
    text-align: center;
    font-weight: 600;
    font-family: cursive;
    color: black;
    }

    .form button {
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #99f6e4;
    box-shadow: 2px 3px rgb(0, 2, 65);

    color: rgb(0, 0, 0);
    font-size: medium;
    font-weight: 600;
    transition: 400ms;
    font-family: cursive;
    }

    .form button:hover {
    background-color: #14b8a6;
    transition: 400ms;
    cursor: pointer;
    }

    .input {
    padding: 10px;
    width: 280px;
    border-radius: 10px;
    border-style: double;
    border-color: black;
    font-size: 15px;
    box-shadow: 2px 3px rgb(0, 2, 65);

    font-family: cursive;
    }

    .forgot,
    a {
    padding-top: 10px;
    font-weight: 600; 
    color: rgba(0, 0, 0, 0.994);
    font-family: cursive;
    text-decoration: none;
    transition: 400ms;
    }
    .forgot,
    a:hover {
    color: rgba(0, 0, 0, 0.703);
    transition: 400ms;
    }

    .Mail,
    .Password {
    font-size: 16px;
    /* font-weight: 600; */
    font-family: cursive;
    color: black;
    }

</style>

<script>
    export default {
    data() {
        return {
            email: '', // El correo ingresado por el usuario
            password: '', // La contraseña ingresada por el usuario
            message: '' // Mensaje de éxito o error
        };
    },
    methods: {
        async login() {
            try {
                // Enviar la solicitud POST al backend
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.email, // Enviar el correo como "username"
                        password: this.password // Enviar la contraseña
                    })
                });

                const data = await response.json();
                
                if (response.ok) {
                    this.message = data.message; // Mostrar mensaje de éxito
                } else {
                    this.message = data.message; // Mostrar mensaje de error
                }
            } catch (error) {
                console.error('Error:', error);
                this.message = 'Error al conectar con el servidor';
            }
        }
    }
};
    
</script>