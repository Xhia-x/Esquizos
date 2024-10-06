var partidaModel = require('./partidaModel.js');

module.exports.registerPartidaDBService = (partidaData) => {
    return new Promise(async function myFn(resolve, reject) {

        var partida = new partidaModel();

        partida.nombre = partidaData.nombre;
        partida.nJugadores = partidaData.nJugadores;
        partida.jugadores = partidaData.jugadores;
        partida.link = partidaData.link;
        partida.dineroInicial = partidaData.dineroInicial;
        partida.tiempoMaximo = partidaData.tiempoMaximo;

        console.log(partida.nombre);
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