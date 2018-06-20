const express = require('express');
const router = express.Router();
const Zavod = require('../models/zavod');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "it works for get zavod"
    })
});

router.post("/getZavod", (req, res) => {
    console.log("uslo u getObv");
    Novost.findOne({_id: req.body.id}, (error, data) => {
        if (error) {
            res.status(404).send(error);
        } else {
            res.status(200).send(data);
        }
    });
});


router.get('/all', (req, res, next) => {
    Zavod.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});

router.post('/add', (req, res, next) => {
    // const prod = {
    //     name:req.body.name,
    //     price: req.body.price
    // };
    console.log(req.body);
    const zavod = new Zavod({
        _id: new mongoose.Types.ObjectId(),
        idZavoda: req.body.idZavoda,
        drzava: req.body.drzava,
        grad: req.body.grad,
        naziv: req.body.naziv,
        adresa: req.body.adresa,
        informacije: req.body.informacije

        
    });

    zavod.save()//mongoosova fja koja cuva
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(200).json({
        message: "it works for post",
        created: zavod
    })
});

router.post("/deleteall",(req,res)=>{
    Zavod.deleteMany({},err=>res.status(200).send(err))
})

module.exports = router;