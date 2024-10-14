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
        await mongoose.connect('mongodb+srv://yanko:KW2auVzu0h02eDOt@cluster0.ycbhi.mongodb.net/Proyecto1?retryWrites=true&w=majority&appName=Cluster0')
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
});

module.exports = { io};