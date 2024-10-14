var partidaService = require('./partidaServices');

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

module.exports = {registerPartidaControllerFn, buscarPartidaControllerFn,cargarPartidasUsusarioControllerFn};