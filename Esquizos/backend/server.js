import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Configuración detallada de CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Permitir solo el frontend en este puerto
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); // Usar las opciones de CORS

// Habilitar JSON parsing
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb+srv://ifarias21:12345@cluster0.a9yuo.mongodb.net/Construbd?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a la base de datos MongoDB'))
.catch((error) => console.error('Error conectando a MongoDB:', error));

// Definir esquema de usuario
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema, 'User');

// Endpoint para el login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    console.log(`Valores recibidos: Username = ${username}, Password = ${password}`); // Debugging

    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ mensaje: 'Inicio de sesión exitoso' , username: user.username});
        } else {
            res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
});



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
