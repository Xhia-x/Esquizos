// index.js
var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const bcrypt = require("bcrypt"); // Requerimos bcrypt para hashear/verificar contraseñas

var app = express();
app.use(cors());
app.use(express.json()); 

// Usar dotenv para manejar las variables de entorno (opcional pero recomendado)
require('dotenv').config();

var CONNECTION_STRING = process.env.CONNECTION_STRING || "mongodb+srv://admin:Password@cluster0.yxmak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var DATABASENAME = process.env.DATABASENAME || "USERS";
var database;

app.listen(5038, async () => {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING);
        database = client.db(DATABASENAME); // Asigna la base de datos a la variable global
        console.log("MongoDB Connection Successful");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});


// Endpoint GET para obtener notas
app.get('/api/USERS/GetNotes', async (req, res) => {
    try {
        const notes = await database.collection("USERSCOLLECTION").find({}).toArray();
        res.send(notes);
    } catch (error) {
        res.status(500).send("Error retrieving notes");
    }
});

// Endpoint POST para login
app.post('/api/USERS/Login', async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log("Datos recibidos:", username, password); // Muestra los datos recibidos
        const user = await database.collection("USERSCOLLECTION").findOne({ Username: username });

        if (user) {
            console.log("Usuario encontrado:", user);
            console.log("Contraseña recibida:", password);
            console.log("Contraseña en la BD:", user.Password);

            if (user.Password === password) {
                res.status(200).json({ message: "Login successful" });
            } else {
                res.status(401).json({ message: "Contraseña incorrecta" });
            }
        } else {
            res.status(401).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "An error occurred during login" });
    }
});



// Endpoint DELETE para borrar notas (opcional)
app.delete('/api/USERS/DeleteNotes', async (req, res) => {
    try {
        await database.collection("USERSCOLLECTION").deleteOne({
            _id: req.query.id
        });
        res.json("Delete Successfully");
    } catch (error) {
        res.status(500).json("Error deleting note");
    }
});
