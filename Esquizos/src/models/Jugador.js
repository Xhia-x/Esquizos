export default class Partida {
    constructor(user, CasillaID,dinero,propiedades,tokenID){
        this.user = user;
        this.CasillaID = CasillaID;
        this.dinero = dinero;
        this.propiedades = propiedades;
        this.tokenID = tokenID;
    }
    getUser(){
        return this.user;
    }
    getCasillaID(){
        return this.CasillaID;
    }
    getDinero(){
        return this.dinero;
    }
    getPropiedades(){
        return this.propiedades;
    }
    getTokenID(){
        return this.tokenID;
    }
    
}