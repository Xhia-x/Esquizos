var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var partidaSchema = new Schema ({

    nombre: {type: String, required: true, unique: true},
    administrador:{type: String, required: true},
    nJugadores: {type: Number, required: true},
    jugadores: {type: Array, required: true},
    link: {type: String, required: true, unique: true},
    dineroInicial: {type: Number, required: true},
    tiempoMaximo: {type: Number, required: true},
    tiempoPorTurno: {type: Number, required: true}

})

module.exports = mongoose.model('Partida', partidaSchema, 'Partida');