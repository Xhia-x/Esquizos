export default class Partida {
    constructor(nombre, nJugadores, link, dineroInicial, tiempoMaximo, tiempoPorTurno) {
      this.nombre = nombre;
      this.administrador = "";
      this.nJugadores = nJugadores;
      this.jugadores = []; // Array de jugadores
      this.link = link;
      this.dineroInicial = dineroInicial;
      this.tiempoMaximo = tiempoMaximo;
      this.tiempoPorTurno = tiempoPorTurno;
    }

    generarLinkCompartir(){
      const linkCompartir = "http://localhost:8080/partida/"+this.nombre;
      return linkCompartir;
    }
  }
  