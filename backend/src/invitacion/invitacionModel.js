var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var invitacionSchema = new Schema ({

    administrador: {type: String, required: true},
    invitado: {type: String, required: true},
    partida: {type: String, required: true},
    estado: {type: String, required: true}

})

module.exports = mongoose.model('Invitacion', invitacionSchema, 'Invitacion');