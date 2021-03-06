require('dotenv').config();
require("./model/dbConnect"); // called to connect the database at the start of the app
const manufacturerRoute = require("./controller/manufacturers");
const carRoute = require("./controller/car");
const path = require('path');

const express = require("express");
const app  = express();


app.listen(process.env.PORT || 5000,()=>{ 
    console.log("Server started at port");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public'))); //used public path to server any static files 
app.set('view engine','ejs'); //used ejs to render views
 
app.use("/manufacturer",manufacturerRoute);
app.use("/car",carRoute);