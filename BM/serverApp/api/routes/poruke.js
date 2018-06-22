const express = require('express');
const router = express.Router();
const Poruka = require('../models/poruka');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.get('/prepravi', function (req, res) {
    Poruka.find({}, function (err, data) {
        if (err) {
            console.log("Nije naso poruke");
            console.log(err);
        } else {
            for (let poruka of data) {
                if (poruka.idZavoda != "5b2bbb294ab237335c4141af") {
                    console.log(poruka.idZavoda);
                    poruka.idZavoda = "5b2bbb294ab237335c4141af";
                    Poruka.update({_id: poruka._id}, poruka, function (err, da, ta) {
                        if (err) {
                            console.log("nije updatovao poruke");
                            console.log(err);
                        }
                    });
                }
            }
        }
    });
});

router.post("/add", (req, res, nest) => {
    let msgData = req.body;
    console.log(msgData);
    const msg = new Poruka({
        _id: new mongoose.Types.ObjectId(),
        email: msgData.email,
        ime: msgData.ime,
        prezime: msgData.prezime,
        brojDavaoca: msgData.brojDavaoca,
        idZavoda: msgData.idZavoda,
        poruka: msgData.poruka,
        date: msgData.date
    });
    console.log("writing poruka");
    console.log(msg);

    msg.save((error, data) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(data);
        }
    });

});

router.get('/all', (req, res, next) => {
    Poruka.find()
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

router.post('/interval', (req, res, next) => {
    console.log("stigao");
    const indexOd = req.body.firstIndex;
    const indexDo = req.body.lastIndex;
    console.log(indexOd, indexDo);
    Poruka.find({idZavoda: req.body.idZavoda})
        .sort('-email')
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
                    naslov: "Index ot ouf range",
                    sadrzaj: "Click to find out more"
                });


        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});

router.post("/getForZavod", function (req, res) {
    Poruka.find({idZavoda: req.body.idZavoda},
        function (err, data) {
            if (err) {
                console.log("error finding poruke forZavod");
                console.log(err);
            } else {
                console.log(data);
                res.status(200).send(data);
            }

        });
});

module.exports = router;