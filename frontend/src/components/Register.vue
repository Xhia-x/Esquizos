<template>
  
<body>
    <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
        <div class="card shadow p-4 col-md-4">
            <h2 class="text-center mb-4 text-primary">Register</h2>
            <form @submit.prevent="register">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input 
                        type="username" 
                        class="form-control" 
                        id="username" 
                        v-model="user.username" 
                        placeholder="Enter your username" 
                        required
                    >
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        v-model="user.email" 
                        placeholder="Enter your email" 
                        required
                    >
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="password" 
                        v-model="user.password" 
                        placeholder="Enter your password" 
                        required
                    >
                </div>
                <button type="submit" class="btn btn-danger w-100">Create Account</button>
            </form>
        </div>
    </div>
</body>
</template>



<script>

import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: ''
            }
        };
    },
    methods: {
        register() {
            axios.post("http://localhost:9992/user/register", this.user)
            .then(({data}) => {
                if (data.status === true) {
                    alert("Registered Successfully");
                    this.$router.push({ name: 'HelloWorld' });
                } else {
                    alert("Register FAILED");
                }
            })
            .catch(err => {
                console.error(err);
                alert("Error, Try Again");
            });
        }
    }
}
</script>


<style scoped>

body {
    background: none;
  position: relative;
  margin: 0;
}

.card {
    position: relative;
    border-radius: 8px;
}

.text-primary {
    color: red !important;
}

button{
    background-color: red;
}

video {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 105%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2));
  z-index: -210;
}

</style>