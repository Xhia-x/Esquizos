const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb+srv://jamkkles:pablonixty1@cluster0.porfj.mongodb.net/Constru?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "Constru";
let database;

(async () => {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING, { useUnifiedTopology: true });
        database = client.db(DATABASE_NAME);
        console.log("Connected to `" + DATABASE_NAME + "`!");

        app.get('/api/Constru/logeo', async (request, response) => {
            try {
                console.log("Accediendo a la ruta /api/Login/logeo");
                const result = await database.collection("logeo").find({}).toArray();
                console.log("Documentos obtenidos:", result);
                response.send(result);
            } catch (error) {
                console.error("Error al obtener documentos:", error);
                response.status(500).send(error);
            }
        });

        app.listen(7000, () => {
            console.log("Servidor escuchando en el puerto 7000");
        });
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
})();
