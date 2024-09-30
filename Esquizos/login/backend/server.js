const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb+srv://Xpell:1234@proyecto1.aavq9.mongodb.net/?retryWrites=true&w=majority&appName=proyecto1";
const DATABASE_NAME = "Login";
let database;

(async () => {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING, { useUnifiedTopology: true });
        database = client.db(DATABASE_NAME);
        console.log("Connected to `" + DATABASE_NAME + "`!");

        app.get('/api/Login/logeo', async (request, response) => {
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
