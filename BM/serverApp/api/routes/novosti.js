const express = require('express');
const router = express.Router();
const Novost = require('../models/novost');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "it works for get zavod"
    })
});

router.get('/all', (req, res, next) => {
    Novost.find()
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


router.get("next", function (req, res, next) {

    // uzmi index iz url-a i pribavi jos 10 posta

});


router.post('/add', (req, res, next) => {

    const novost = new Novost({
        _id: new mongoose.Types.ObjectId(),
        datum: req.body.datum,
        idZavoda: req.body.idZavoda,
        naslov: req.body.naslov,
        sadrzaj: req.body.sadrzaj
    });

    novost.save()//mongoosova fja koja cuva
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(200).json({
        message: "it works for post",
        created: novost
    })
});

router.post('/interval', (req, res, next) => {
    console.log("stigao");
    const indexOd = req.body.firstIndex;
    const indexDo = req.body.lastIndex;
    console.log(indexOd, indexDo);
    Novost.find()
        .exec()
        .then(docs => {
            var niz = docs;
            var drugi;
            if (niz.length > indexOd) {
                if (niz.length > indexDo) {

                    drugi = niz.slice(indexOd, indexDo);

                    res.status(200).json(drugi);

                } else {

                    drugi = niz.slice(indexOd);

                    res.status(200).json(drugi);
                }
            } else
                return res.status(200).json({
                    naslov:"Index ot ouf range",
                    sadrzaj:"Click to find out more"
                });


        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});


module.exports = router;