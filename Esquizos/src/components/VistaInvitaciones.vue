<template>
    <div class="modal fade" id="invitacionesModal" tabindex="-1" aria-labelledby="invitacionesModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="invitacionesModalLabel">Invitaciones</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p v-if="invitaciones.length === 0">No tienes invitaciones pendientes.</p>
            <ul v-else>
              <li v-for="(invitacion, index) in invitaciones" :key="index">
                <p>Invitación a la partida: {{ invitacion.partida }} de {{ invitacion.administrador }}</p>
                <p>¿Deseas aceptarla?</p>
                <button @click="aceptarInvitacion(index)">Aceptar</button> 
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'VistaInvitaciones',
    data() {
      return {
        invitaciones: [] 
      };
    },
    methods: {
      /*aceptarInvitacion(index) {
        const invitacionAceptada = this.invitaciones.splice(index, 1); // Remover la invitación aceptada
        alert(`Has aceptado la invitación a la partida: ${invitacionAceptada.partida}`);
      }*/
    },
    mounted() {
      const nombreUsuario = localStorage.getItem('user') || sessionStorage.getItem('user');
        axios.get(`http://localhost:9992/invitacion/${nombreUsuario}`)
          .then(({ data }) => {
              this.invitaciones = data;
          })
          .catch(err => {
            console.error(err);
        });
      
    }
  };
  </script>
  
  <style scoped>
  .modal-body ul {
    padding-left: 0;
  }
  .modal-body li {
    list-style-type: none;
    margin-bottom: 10px;
  }
  </style>
  