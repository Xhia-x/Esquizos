// jugadorService.js
var JugadorModel = require('./jugadorModel.js'); // Importa el modelo correctamente

module.exports.subirJugadorDBService = (userData) => {
    return new Promise(async function myFn(resolve, reject) {
        var JugadorData = new JugadorModel(); // Cambia a JugadorModel
        JugadorData.userSchema = userData.userSchema;
        JugadorData.CasillaID = userData.CasillaID;
        JugadorData.dinero = userData.dinero;
        JugadorData.propiedades = userData.propiedades;
        JugadorData.tokenID = userData.tokenID;
        try {
            await JugadorData.save();
            resolve(true);
        } catch (error) {
            console.error("Error al guardar el jugador:", error);
            reject(false);
        }
    });
};
module.exports.actualizarJugadorDBService = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Asegúrate de que userData.userSchema esté definido
            if (!userData.userSchema) {
                console.error("userSchema no está definido.");
                return reject(false);
            }

            // Busca por el ID del jugador y actualiza los campos
            const resultado = await JugadorModel.findOneAndUpdate(
                { userSchema: userData.userSchema }, // Criterio de búsqueda por ID del jugador
                {
                    $set: {
                        CasillaID: userData.CasillaID,
                        dinero: userData.dinero,
                        propiedades: userData.propiedades,
                    }
                },
                { new: true } // Devuelve el documento actualizado
            );

            if (resultado) {
                console.log("Jugador actualizado correctamente:", resultado);
                resolve(true); // Actualización exitosa
            } else {
                console.error("Jugador no encontrado con userSchema:", userData.userSchema);
                resolve(false); // Jugador no encontrado
            }
        } catch (error) {
            console.error("Error al actualizar el jugador en la base de datos:", error);
            reject(false); // Error en la operación
        }
    });
};


