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

module.exports = {registerPartidaControllerFn};