const express= require('express');
const router = express.Router();
const Obavestenje =require('../models/obavestenje');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"it works for get zavod"
    })
    });
    
router.get('/all',(req,res,next)=>{
    Obavestenje.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    });    
    router.post('/add',(req,res,next)=>{
        // const prod = {
        //     name:req.body.name,
        //     price: req.body.price
        // };
    
        const obavestenje = new Obavestenje({
            _id: new mongoose.Types.ObjectId(),
            
            
            idZavoda :req.body.idZavoda,
            naslov :req.body.naslov,
            sadrzaj :req.body.sadrzaj,
            datum: req.body.datum
        });
    
        obavestenje.save()//mongoosova fja koja cuva
        .then(result => {
            console.log(result);
        })
        .catch(err=>console.log(err));
    
        res.status(200).json({
            message:"it works for post",
            created: obavestenje
        })
    });



    module.exports = router;