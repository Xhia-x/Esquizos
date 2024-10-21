// jugadorService.js
var JugadorModel = require('./jugadorModel.js'); // Importa el modelo correctamente

module.exports.subirJugadorDBService = (userData) => {
    return new Promise(async (resolve, reject) => {
        var userModelData = new JugadorModel();
        userModelData.userSchema = userData.userSchema;
        userModelData.CasillaID = userData.CasillaID;
        userModelData.dinero = userData.dinero;
        userModelData.propiedades = userData.propiedades;
        userModelData.tokenID = userData.tokenID;

        try {
            await userModelData.save();
            resolve(true);
        } catch (error) {
            console.error("Error al guardar en la base de datos:", error);
            reject(false);
        }
    });
};
module.exports.actualizarJugadorDBService = (userData) => {
    return new Promise(async (resolve, reject) => {
        console.log("Datos recibidos en el backend:", userData);
        try {
            // Busca por el ID del jugador y actualiza los campos
            const resultado = await JugadorModel.findOneAndUpdate(
                { userSchema: userData.userSchema }, // Criterio de búsqueda
                {
                    $set: {
                        CasillaID: userData.CasillaID,
                        dinero: userData.dinero,
                        propiedades: userData.propiedades,
                        tokenID: userData.tokenID
                    }
                },
                { new: true } // Devuelve el documento actualizado
            );

            if (resultado) {
                console.log("Jugador actualizado:", resultado);
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            console.error("Error al actualizar el jugador en la base de datos:", error);
            reject(false);
        }
    });
};



