var partidaModel = require('./partidaModel.js');

module.exports.registerPartidaDBService = (partidaData) => {
    return new Promise(async function myFn(resolve, reject) {

        var partida = new partidaModel();

        partida.nombre = partidaData.nombre;
        partida.administrador = partidaData.administrador;
        partida.nJugadores = partidaData.nJugadores;
        partida.jugadores = partidaData.jugadores;
        partida.link = partidaData.link;
        partida.dineroInicial = partidaData.dineroInicial;
        partida.tiempoMaximo = partidaData.tiempoMaximo;
        partida.tiempoPorTurno = partidaData.tiempoPorTurno;

        console.log(partida.nombre);
        console.log(partida.administrador);
        console.log(partida.nJugadores);
        console.log(partida.jugadores);
        console.log(partida.link);
        console.log(partida.dineroInicial);
        console.log(partida.tiempoMaximo);

        try {
            const resultNombre = await partidaModel.findOne({ nombre: partidaData.nombre });
            const resultLink = await partidaModel.findOne({ link: partidaData.link });
            if (resultNombre || resultLink) {
                resolve({ status: false, msg: "Nombre o link ya están en uso" });
            } else {
                await partida.save();
                resolve({ status: true, msg: "Partida registrada exitosamente" });
            }
        } catch (error) {
            reject({ status: false, msg: "Error al registrar la partida" });
        }
    });
};


module.exports.buscarPartidaDBService = async (partidaData) => {
    try {
        const result = await partidaModel.findOne({ nombre: partidaData.nombre });
        console.log(partidaData);

        if (result) {
            console.log("Partida encontrada");
            return { status: true, msg: "Partida encontrada", partida: result  };
        } else {
            console.log("INVALID DATA");
            return { status: false, msg: "INVALID DATA" };
        }

    } catch (error) {
        console.log("INVALID DATA");
        return { status: false, msg: "INVALID DATA" };
    }
};

module.exports.cargarPartidasUsuarioDBService = async (userData) => {
    try {
        var result = await partidaModel.find({ administrador: userData.username });
        
        console.log(userData);

        if (result) {
            console.log("Partidas encontradas");
            return { status: true, msg: "Partidas encontradas", partidas: result };
        } else {
            console.log("INVALID DATA");
            return { status: false, msg: "INVALID DATA" };
        }

    } catch (error) {
        console.log("INVALID DATA CATCH");
        return { status: false, msg: "INVALID DATA" };
    }
};

module.exports.cargarPartidasInvitadoDBService = async (userData) => {
    try {
        var result = await partidaModel.find({ jugadores: userData.username });
        
        console.log(userData);

        if (result) {
            console.log("Partidas encontradas");
            return { status: true, msg: "Partidas encontradas", partidas: result };
        } else {
            console.log("INVALID DATA");
            return { status: false, msg: "INVALID DATA" };
        }

    } catch (error) {
        console.log("INVALID DATA CATCH");
        return { status: false, msg: "INVALID DATA" };
    }
};

module.exports.eliminarPartidaDBService = async (partidaData) => {
    try {
        const result = await partidaModel.deleteOne({ nombre: partidaData.nombre });

        if (result.deletedCount > 0) {
            console.log("Partida eliminada");
            return { status: true, msg: "Partida eliminada" };
        } else {
            console.log("No se encontró la partida");
            return { status: false, msg: "No se encontró la partida" };
        }
    } catch (error) {
        console.log("Error al eliminar la partida");
        return { status: false, msg: "Error al eliminar la partida" };
    }
};

module.exports.actualizarPartidaDBService = async (partidaData) => {
    try {
        const result = await partidaModel.updateOne({ nombre: partidaData.nombre }, partidaData);

        if (result.nModified > 0) {
            console.log("Partida actualizada");
            return { status: true, msg: "Partida actualizada" };
        } else {
            console.log("No se encontró la partida");
            return { status: false, msg: "No se encontró la partida" };
        }
    } catch (error) {
        console.log("Error al actualizar la partida");
        return { status: false, msg: "Error al actualizar la partida" };
    }
};