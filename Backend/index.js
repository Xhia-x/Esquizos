const express = require('express');
const { mongoose } = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const CONNECTION_STRING = "mongodb+srv://jamkkles:pablonixty1@cluster0.porfj.mongodb.net/Constru?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "Constru";
let database;


    try {
        const client =  mongoose.connect(CONNECTION_STRING, { useUnifiedTopology: true });
       

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

        const UserSchema = new mongoose.Schema({
            username: {
              type: String,
              required: true,
              unique: true
            },
            password: {
              type: String,
              required: true,
            },
          });
        const User = mongoose.model('logeo', UserSchema, 'logeo');
        // Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ mensaje: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
  });

        app.listen(7000, () => {
            console.log("Servidor escuchando en el puerto 7000");
        });
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }

