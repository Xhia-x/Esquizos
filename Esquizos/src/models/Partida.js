export default class Partida {
    constructor(nombre, nJugadores,jugadores, link) {
      this.nombre = nombre;
      this.administrador = jugadores[0];
      this.nJugadores = nJugadores;
      this.jugadores = jugadores; // Array de jugadores
      this.link = link;
      this.dineroInicial = 0;
      this.tiempoMaximo = Infinity;
    }
  }
  