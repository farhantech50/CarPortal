const express = require('express');
const router = express.Router(); 
const manufacturer = require('../model/manufacturerModel');

router.get("/", (req,res)=>{
    manufacturer.find((err,doc)=>{
        res.send(doc);
    })
})

router.post("/",(req,res)=>{
    const manuf = new manufacturer({
        name: req.query.name,
        country: req.query.country,
        logo: req.query.logo
    })
    manuf.save((err,doc)=>{
        if(!err){
            res.send("New Manufacturer Added");
        }
        else {
            res.send(err);
        }
    });
  
})

router.delete("/delete/:id",(req,res)=>{
    manufacturer.findByIdAndDelete({_id:req.params.id}).then((x)=>{
        console.log(`Manufacturer ${x} successfully deleted from the record.`)
    }).catch(err=>console.log(err));
})


module.exports = router;

