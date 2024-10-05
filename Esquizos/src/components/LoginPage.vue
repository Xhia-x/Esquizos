<template>

  <body>
      <video src="../assets/video.mp4" autoplay="true" muted="true" loop="true"></video>
      <div class="mainContainer">
          <div class="text">
              <h1>MONOPOLY</h1>
              <h2>El mejor juego de la historia</h2>
          </div>
          <div class="login"> 
              <div class="container vh-100 d-flex justify-content-center align-items-center">
                  <div class="card shadow p-4 col-md-4">
                      <div class="header">
                          <h2 class="text-center mb-4 text-primary">Login</h2>
                          <img src="../assets/logo.png">
                      </div>
                      <form @submit.prevent="login">
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
                          <div class="form-check mb-3">
                              <input 
                                  type="checkbox" 
                                  class="form-check-input" 
                                  id="rememberMe" 
                                  v-model="user.rememberMe"
                              >
                              <label class="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                          <button type="submit" class="btn btn-danger w-100">Login</button>
                      </form>
                      <div class="text-center mt-3">
                          <small>Don't have an account? <a href="#/register" class="text-primary">Register</a></small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </body>
  
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
      name: 'LoginPage',
      data() {
          return {
              user: {
                  email: '',
                  password: ''
              }
          };
      },
      methods: {
          login() {
              axios.post("http://localhost:9992/user/login", this.user)
              .then(({data}) => {
                  if (data.status === true) {
                      alert("Logged Successfully");
                      this.$router.push({ name: 'Home' });
                  } else {
                      alert("Login FAILED");
                  }
              })
              .catch(err => {
                  console.error(err);
                  alert("Error, Try Again");
              });
          }
      }
  };
  </script>
  
  
  
  
  
  <style scoped>
  
  .mainContainer {
      width: 90%;
      max-width: 1200px;
      height: 90%;
      display: flex;
      background-color: #33333346;
      margin-top:15px;
      margin-bottom: 15px;
  }
  
  .text {
      flex: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      background-color: #c70000c2;
  }
  
  .login {
      flex: 1;
      display:block;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: none;
  }
  
  
  .header{
      justify-content: center;
  }
  
  
  img {
      position: relative;
      max-width: 100%;
      height: auto;
  }
  
  body {
    background: none;
    position: relative;
    margin: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card {
      position: relative;
      border-radius: 0;
      height: 450px;
      max-width: 100%;
      width: auto;
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
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
    z-index: -210;
    object-fit: cover;
  }
  
  </style>
    