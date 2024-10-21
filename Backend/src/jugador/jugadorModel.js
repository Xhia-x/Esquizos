var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jugadorSchema = new Schema({
    userSchema: { type: String, required: true, unique: true },
    CasillaID: { type: String, required: true },
    dinero: { type: Number, required: true },
    propiedades: { type: Array, required: true },
    tokenID: { type: String, required: true }
});


module.exports = mongoose.model('Jugador', jugadorSchema, 'Jugador');