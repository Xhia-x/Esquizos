var Express = require("ëxpress");
var Mongoclient = require("mongodb").MONGO_CLIENT_EVENTS;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://admin:Password@cluster0.yxmak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";




var DATABASENAME="USERS";
var database;
app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    })
})