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
    console.log("prosloGet");
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
    router.post('/interval1',(req,res,next)=>{
        console.log("prosloGet");
        Obavestenje.find()
        .exec()
        .then(docs => {
            var niz = docs;
            var drugi;
            drugi = niz.slice(0,3);
            console.log(docs);
            res.status(200).json(drugi);
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
        });   



    router.post('/interval',(req,res,next)=>{
        console.log("stigao");
        const indexOd =req.body.firstIndex;
        const indexDo = req.body.lastIndex;
        console.log(indexOd,indexDo);
        Obavestenje.find()
        .exec()
        .then(docs => {
            var niz = docs;
            var drugi;
            if(niz.length>indexOd){
                if (niz.length > indexDo){

                    
                    drugi = niz.slice(indexOd,indexDo - indexOd + 1);
                    
                    res.status(200).json(drugi);
    
                }else{
                   
                    drugi = niz.slice(indexOd);
                    
                    res.status(200).json(drugi);
                }
            }else
            return res.status(404).json({
                message : "prevelik je pocetni index, nema toliko objava"
            })
            
            
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