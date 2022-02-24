const express = require('express');
const router = express.Router(); 
const car = require('../model/carModel');
const manuf = require('../model/manufacturerModel');
const {inspect} = require('util');
const e = require('express');

router.get("/",async (req,res)=>{
    let carList = await car.find().populate({ path: 'manufacturer', model: 'manufacturer' }); //used populate to fetch the data from the linked collection
    res.send(inspect(carList,{depth:null})); //used inspect to see the full details instead of object names
    
})

router.post("/",(req,res)=>{
    const cars = new car({
        name: req.query.name,
        year: req.query.year,
        manufacturer: req.query.manuf,
        image: req.query.image
    })
    cars.save((err,doc)=>{
        if(!err){
            res.send("New Car Added");
        }
        else {
            res.send(err);
        }
    });
  
})

router.get("/country/:country",async (req,res)=>{
    const country = req.params.country;
    let carList =inspect((await car.find().populate({ path: 'manufacturer', model: 'manufacturer' })).filter((x)=>{return x.manufacturer[0].country==country}),{depth:null});
    res.send(carList);
    
})

router.get("/exclude",async (req,res)=>{
    let excludingList = req.query.manufacturer.split(",");
    let carList =await car.find().populate({ path: 'manufacturer', model: 'manufacturer' });
    let finalList=[];
    carList.map((val)=>{
        if(!excludingList.includes(val.manufacturer[0].name)){
        finalList.push(val);}})
    res.send(inspect(finalList,{depth:null}));
})

router.delete("/delete/:id",(req,res)=>{
    car.findByIdAndDelete({_id:req.params.id}).then((x)=>{
        res.send(`Car ${x} successfully deleted from the record.`)
    }).catch(err=>res.send(err));
})

router.post("/multi",async (req,res)=>{
    let multiCars = req.body;

    for(let i of multiCars){
        const cars = new car({
            name: i.name,
            year: i.year,
            manufacturer: i.manufacturer,
            image: i.image
        })
        await cars.save((err,doc)=>{
            if(err){
                res.send(err);
            }
        })
    }
    res.send("New Cars Added");
})



module.exports = router;

