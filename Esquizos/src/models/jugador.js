export default class Partida {
    constructor(userSchema, CasillaID,dinero,propiedades,tokenID) {
        this.userSchema = userSchema;
        this.CasillaID = CasillaID;
        this.dinero = dinero;
        this.propiedades = propiedades;
        this.tokenID = tokenID;
    }

    comprarPropiedad(propiedad){
        this.propiedades.push(propiedad);
    }

    venderPropiedad(propiedad){
        this.propiedades = this.propiedades.filter(prop => prop !== propiedad);
    }
    
}