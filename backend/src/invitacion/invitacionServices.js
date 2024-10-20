var invitacionModel = require('./invitacionModel.js');
var userModel = require('../user/userModel.js');
var partidaModel = require('../partida/partidaModel.js');

module.exports.crearInvitacionDBService = (invitacionData) => {
    return new Promise(async function myFn(resolve, reject) {

        var invitacion = new invitacionModel();

        invitacion.administrador = invitacionData.administrador;
        invitacion.invitado = invitacionData.invitado;
        invitacion.partida = invitacionData.partida;
        invitacion.estado = invitacionData.estado;

        try {
            const usuarioInvitado = await userModel.findOne({ username: invitacionData.invitado });
            const partidaBuscada = await invitacionModel.findOne({ invitado: invitacionData.invitado, partida: invitacionData.partida});
            if (usuarioInvitado) {
                if (partidaBuscada) {
                    resolve({ status: false, msg: "Usuario ya esta en la partida" });
                }
                else{
                    await invitacion.save();
                    resolve({ status: true, msg: "Invitacion creada" });
                }
               
            } else {
                resolve({ status: false, msg: "Usuario no existe" });
            }
        } catch (error) {
            reject({ status: false, msg: "Error al crear invitacion" });
        }
    });
};


module.exports.cargarInvitacionesDBService = async (userData) => {
    try {
        var result = await invitacionModel.find({ invitado: userData.username });

        if (result) {
            //console.log("Invitaciones encontradas");
            return { status: true, msg: "Invitaciones encontradas", invitaciones: result };
        } else {
            //console.log("INVALID DATA");
            return { status: false, msg: "INVALID DATA" };
        }

    } catch (error) {
        console.log("INVALID DATA CATCH");
        return { status: false, msg: "INVALID DATA" };
    }
};

module.exports.aceptarInvitacionDBService = async (invitacionData) => {
    try {
        var result = await invitacionModel.findOne({ administrador: invitacionData.administrador, invitado: invitacionData.invitado, partida: invitacionData.partida });
        if (result) {

            var partida = await partidaModel.findOne({ nombre: invitacionData.partida });
            if(partida){
                if(partida.jugadores.length >= partida.nJugadores){
                    return { status: false, msg: "Partida llena" };
                }
                partida.jugadores.push(invitacionData.invitado);
                await partida.save();
            }

            result.estado = "aceptada";
            await result.save();


            return { status: true, msg: "Invitacion aceptada" };
        } else {
            //console.log("INVALID DATA");
            return { status: false, msg: "INVALID DATA" };
        }

    } catch (error) {
        console.log("INVALID DATA CATCH");
        return { status: false, msg: "INVALID DATA" };
    }
}

module.exports.recharInvitacionesDBService = async (invitacionData) => {
    try {
        var result = await invitacionModel.deleteOne({ administrador: invitacionData.administrador, invitado: invitacionData.invitado, partida: invitacionData.partida });
        if (result) {
            //console.log("Invitacion rechazada");
            return { status: true, msg: "Invitacion rechazada" };
        } else {
            //console.log("INVALID DATA");
            return { status: false, msg: "INVALID DATA" };
        }
    } catch (error) {
        console.log("INVALID DATA CATCH");
        return { status: false, msg: "INVALID DATA" };
    }
}
