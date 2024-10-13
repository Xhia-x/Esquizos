export default class Invitacion {
    constructor(administrador, invitado, partida) {
        this.administrador = administrador;
        this.invitado = invitado;
        this.partida = partida;
        this.estado = "pendiente";
    }
}