// jugadorController.js
var jugadorService = require('./jugadorService.js');

var subirJugadorControllerFn = async (req, res) => {
    try {
        console.log("Datos recibidos en el backend:", req.body);
        
        var status = await jugadorService.subirJugadorDBService(req.body);
        
        console.log("Resultado del servicio:", status);
        if (status) {
            res.send({ "status": true, "message": "Jugador almacenado correctamente" });
        } else {
            res.send({ "status": false, "message": "Failed to store player" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ "status": false, "message": "Error en el servidor" });
    }
};

var actualizarJugadorControllerFn = async (req, res) => {
    try {
        const status = await jugadorService.actualizarJugadorDBService(req.body);

        if (status) {
            res.send({ "status": true, "message": "Jugador actualizado correctamente" });
        } else {
            res.send({ "status": false, "message": "No se pudo actualizar el jugador" });
        }
    } catch (err) {
        console.error("Error al actualizar el jugador:", err);
        res.status(500).send({ "status": false, "message": "Error en el servidor" });
    }
};

// Exporta ambas funciones correctamente
module.exports = {
    subirJugadorControllerFn,
    actualizarJugadorControllerFn
};
