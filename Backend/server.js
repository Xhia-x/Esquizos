const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./route/routes');
const http = require('http');
const { Server } = require('socket.io');

mongoose.set('strictQuery', false);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080", // permite conexiones de tu frontend
    methods: ["GET", "POST"]
  }
});

server.listen(9992, function check(err){
    if(err){
        console.log("ERROR!");
    } else {
        console.log("LISTENING ON PORT 9992...");
    }
});

async function connectToDatabase() {
    try {
        //await mongoose.connect('mongodb+srv://yanko:KW2auVzu0h02eDOt@cluster0.ycbhi.mongodb.net/Proyecto1?retryWrites=true&w=majority&appName=Cluster0')
        await mongoose.connect('mongodb://yanko:KW2auVzu0h02eDOt@cluster0-shard-00-00.ycbhi.mongodb.net:27017,cluster0-shard-00-01.ycbhi.mongodb.net:27017,cluster0-shard-00-02.ycbhi.mongodb.net:27017/Proyecto1?ssl=true&replicaSet=atlas-jqzm0w-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
        console.log("Connected to DB");
    } catch (err) {
        console.log("Error connecting to DB", err);
    }
}
connectToDatabase();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());
app.use(routes);

// WebSockets
io.on('connection', (socket) => {
    console.log('Usuario conectado ' + socket.id);

    // Escuchar cuando el cliente pide unirse a una partida 
    socket.on('joinPartida', (partida) => {
        socket.join(partida);  
        console.log(`Usuario ${socket.id} se unió a la partida ${partida}`);
    });

    socket.on('rollDice', (data) => {
        const { user, dice1, dice2, partida } = data;
        console.log(`Usuario ${user} en la partida ${partida}, numeros: ${dice1} - ${dice2}`);
        io.to(partida).emit('diceRolled', { dice1, dice2 });
      });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('finalizarPartida', (data) => {
        const { partida } = data;
        console.log(`Finalizando partida ${partida}`);
        // Notifica a todos los jugadores en la sala
        io.to(partida).emit('partidaEliminada', { message: 'La partida ha sido eliminada.' });
    
        // Desconectar a todos los usuarios de la sala
        const socketsInPartida = io.sockets.adapter.rooms.get(partida);
        if (socketsInPartida) {
            socketsInPartida.forEach(socketId => {
                const socket = io.sockets.sockets.get(socketId);
                if (socket) {
                    socket.leave(partida);  // Desconectar el socket de la sala
                    console.log(`Usuario ${socketId} desconectado de la partida ${partida}`);
                }
            });
        }
    });

    socket.on('moverFicha', (data) => {
        const { ficha, indice, usuario, partida } = data;
        console.log(`Usuario ${usuario} en la partida ${partida}, mueve ficha ${indice}`);
        io.to(partida).emit('movimientoGenerado', { ficha, indice, usuario });
    });

    socket.on('seleccionarFigura', (data) => {
        const { figura, usuario, partida } = data;
        console.log(`Evento seleccionarFigura recibido: ${figura} por ${usuario} en la partida ${partida}`); // Verificación de recepción
        io.to(partida).emit('figuraSeleccionada', { figura, usuario });
    });

    socket.on('seleccionarColor', (data) => {
        const { color, usuario, partida } = data;
        console.log(`Evento seleccionarColor recibido: ${color} por ${usuario} en la partida ${partida}`);
        io.to(partida).emit('colorSeleccionado', { color, usuario });
    });

    socket.on('seleccionarNombre', (data) => {
        const { nombre, usuario, partida } = data;
        console.log(`Evento seleccionarNombre recibido: ${nombre} por ${usuario} en la partida ${partida}`);
        io.to(partida).emit('nombreSeleccionado', { nombre, usuario });
    });

    socket.on('comprarTerreno', (data) => {
        const { terreno, usuario, partida } = data;
        console.log(`Evento comprarTerreno recibido: ${terreno} por ${usuario} en la partida ${partida}`);
        io.to(partida).emit('terrenoComprado', { terreno, usuario });
    });

    socket.on('comprarCasa', (data) => {
        const { terreno, usuario, partida } = data;
        console.log(`Evento comprarCasa recibido: ${terreno} por ${usuario} en la partida ${partida}`);
        io.to(partida).emit('casaComprada', { terreno, usuario });
    });
    
});

module.exports = { io};