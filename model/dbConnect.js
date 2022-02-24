const mongo = require("mongoose");
mongo.connect('mongodb+srv://waveiot:Q1w2e3r4t5Y6@cluster0.yix5s.mongodb.net/CarPortal?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true},()=>{
    console.log('connected to database');
})
require('./manufacturerModel');
