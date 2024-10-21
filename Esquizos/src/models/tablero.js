// Objective: Define the tablero class.
export default class Partida {
    constructor(jugador,njugador,mazosuerte,mazocomunidad){
        this.jugadores = [];
        this.jugadores.push(jugador);
        this.njugadores = njugador;
        this.mazosuerte = mazosuerte;
        this.mazocomunidad = mazocomunidad;

    }
    getJugadores(){
        return this.jugadores;
    }
    getNJugadores(){
        return this.njugadores;
    }
    getMazoSuerte(){
        return this.mazosuerte;
    }
    getMazoComunidad(){
        return this.mazocomunidad;
    }
    setMazoSuerte(mazosuerte){
        this.mazosuerte = mazosuerte;
    }
    setMazoComunidad(mazocomunidad){
        this.mazocomunidad = mazocomunidad;
    }
}