var partidaService = require('./partidaServices');
const { io } = require('../../server'); 

var registerPartidaControllerFn = async (req, res) => {
    try {

        console.log(req.body);
        var result = await partidaService.registerPartidaDBService(req.body);
        console.log(result.status);

        if(result.status){
            res.status(200).send({ "status": true, "message": result.msg });
            console.log("Partida registered successfully");
        } else {
            res.send({ "status": false, "message": result.msg });
            console.log("Failed partida registration");
        }

    } catch (err) {
        res.status(500).send({ "status": false, "message": "Error en el servidor" });
        console.log(err);
    }
}

var buscarPartidaControllerFn = async (req, res) => {
    try {

        const nombrePartida = req.params.nombrePartida; // Obtén el nombre de la partida
        console.log("Buscando partida:", nombrePartida);

        var result = await partidaService.buscarPartidaDBService( {nombre: nombrePartida} );
        console.log(result.status);

        if(result.status){
            res.json(result.partida);
            console.log("Partida encontrada");
        } else {
            res.status(404).send('Partida no encontrada');
            console.log("Partida no encontrada");
        }

    } catch (err) {
        res.status(500).send({ "status": false, "message": "Error en el servidor" });
        console.log(err);
    }
}

var cargarPartidasUsusarioControllerFn = async (req, res) => {
    try {

        const nombreUsuario = req.params.nombreUsuario; // Obtén el nombre de la partida
        console.log("Buscando partidas de:", nombreUsuario);

        var result = await partidaService.cargarPartidasUsusarioDBService( {username: nombreUsuario} );
        console.log(result.status);

        if(result.status){
            res.json(result.partidas);
            console.log("Partidas encontradas");
        } else {
            res.status(404).send('Partidas no encontradas');
            console.log("Partidas no encontradas");
        }

    } catch (err) {
        res.status(500).send({ "status": false, "message": "Error en el servidor" });
        console.log(err);
    }
}

const eliminarPartidaControllerFn = async (req, res) => {
    const partidaNombre = req.params.nombrePartida;

    try {
        const partida = await partidaService.buscarPartidaDBService({ nombre: partidaNombre });

        if (!partida.status) {
            return res.status(404).send({ message: 'Partida no encontrada' });
        }
        
        const partidaData = { nombre: partidaNombre };
        const result = await partidaService.eliminarPartidaDBService(partidaData);

        if (result.status) {
            if (io) {
                io.emit('partidaEliminada', { message: `La partida ${partidaNombre} ha sido eliminada.` });
            } else {
                console.error("Socket.IO no está definido");
            }
            res.status(200).send({ message: result.msg });
        } else {
            res.status(404).send({ message: result.msg });
        }
    } catch (error) {
        console.error('Error al eliminar partida:', error);
        res.status(500).send({ message: 'Error al eliminar la partida', error: error.message });
    }
};

module.exports = {registerPartidaControllerFn, buscarPartidaControllerFn,cargarPartidasUsusarioControllerFn, eliminarPartidaControllerFn};