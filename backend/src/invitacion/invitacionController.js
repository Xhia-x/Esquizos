var invitacionServices = require('./invitacionServices.js');

var crearInvitacionControllerFn = async (req, res) => {
    try {

        console.log(req.body);
        var result = await invitacionServices.crearInvitacionDBService(req.body);
        console.log(result.status);

        if(result.status){
            res.send({"status": true, "message": "Invitacion creada"});
        } else {
            res.send({"status": false, "message": "Fallo al crear invitacion"});
        }

    } catch (err) {
        console.log(err);
    }
}

var cargarInvitacionesUsusarioControllerFn = async (req, res) => {
    try {

        const nombreUsuario = req.params.nombreUsuario; 
        console.log("Buscando invitaciones de:", nombreUsuario);

        var result = await invitacionServices.cargarInvitacionesDBService( {username: nombreUsuario} );
        console.log(result.status);

        if(result.status){
            res.json(result.invitaciones);
            console.log("Invitaciones encontradas");
        } else {
            res.status(404).send('Invitaciones no encontradas');
            console.log("Invitaciones no encontradas");
        }

    } catch (err) {
        res.status(500).send({ "status": false, "message": "Error en el servidor" });
        console.log(err);
    }
}

module.exports = {crearInvitacionControllerFn, cargarInvitacionesUsusarioControllerFn};