export default class Partida {
    constructor(nombre, administrador,nJugadores, jugadores,link, dineroInicial, tiempoMaximo, tiempoPorTurno, tableroSeleccionado) {
      this.nombre = nombre;
      this.administrador = administrador;
      this.nJugadores = nJugadores;
      this.jugadores = jugadores;
      this.link = link;
      this.dineroInicial = dineroInicial;
      this.tiempoMaximo = tiempoMaximo;
      this.tiempoPorTurno = tiempoPorTurno;
      this.tableroSeleccionado = tableroSeleccionado
    }

    generarLinkCompartir(){
      const linkCompartir = "http://localhost:8080/partida/"+this.nombre;
      return linkCompartir;
    }
  }
  