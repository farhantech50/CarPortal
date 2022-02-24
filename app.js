require('dotenv').config();
require("./model/dbConnect");
const manufacturerRoute = require("./controller/manufacturers");
const carRoute = require("./controller/car");
const path = require('path');

const express = require("express");
const app  = express();


app.listen(process.env.PORT,()=>{
    console.log("Server started at port "+process.env.PORT);
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine','ejs');

app.use("/manufacturer",manufacturerRoute);
app.use("/car",carRoute);