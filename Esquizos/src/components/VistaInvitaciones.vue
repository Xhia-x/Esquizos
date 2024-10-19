<template>
    <div class="modal fade" id="invitacionesModal" tabindex="-1" aria-labelledby="invitacionesModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="invitacionesModalLabel">Invitaciones</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p v-if="filteredInvitaciones.length === 0">No tienes invitaciones pendientes.</p>
            <ul v-else>
                <li v-for="(invitacion, index) in filteredInvitaciones" :key="index">
                <p>Invitación a la partida: {{ invitacion.partida }} de {{ invitacion.administrador }}</p>
                <p>¿Deseas aceptarla?</p>
                <button class="botonAceptar" @click="aceptarInvitacion(index, invitacion.partida, invitacion.invitado )">Aceptar</button>
                <button class="botonRechazar" @click="rechazarInvitacion(index, invitacion.partida, invitacion.invitado )">Rechazar</button> 
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
    computed: {
      filteredInvitaciones() {
        return this.invitaciones.filter(invitacion => invitacion.estado === 'pendiente');
      }
    },
    methods: {
      aceptarInvitacion(index) {
        const invitacionAceptada = this.filteredInvitaciones[index];
        alert(`Has aceptado la invitación a la partida: ${invitacionAceptada.partida}`);
        invitacionAceptada.estado = 'aceptada';
        axios.post('http://localhost:9992/invitacion/aceptar', invitacionAceptada)
          .then(({ data }) => {
            console.log(data);
          })
          .catch(err => {
            console.error(err);
          });
        this.filteredInvitaciones.splice(index, 1);
      },
      rechazarInvitacion(index) {
        const invitacionRechazada = this.filteredInvitaciones[index];
        alert(`Has rechazado la invitación a la partida: ${invitacionRechazada.partida}`);
        invitacionRechazada.estado = 'rechazada';
        axios.post('http://localhost:9992/invitacion/rechazar', invitacionRechazada)
          .then(({ data }) => {
            console.log(data);
          })
          .catch(err => {
            console.error(err);
          });
        this.filteredInvitaciones.splice(index, 1);
      }
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

  .botonAceptar {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-right: 10px;
  }

  .botonRechazar {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
  }
  </style>
  