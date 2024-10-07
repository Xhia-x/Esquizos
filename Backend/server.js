const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./route/routes');
mongoose.set('strictQuery', false);
const cors = require('cors');

/*
const bodyParser = require("body-parser");
const path = require('path');
const bcryp = require('bcrypt');
*/


app.listen(9992, function check(err){
    if(err){
        console.log("ERROR!");
    } else {
        console.log("LISTENING ON PORT 9992...");
    }
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
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