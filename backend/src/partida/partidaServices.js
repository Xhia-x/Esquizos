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