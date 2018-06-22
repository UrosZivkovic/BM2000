const express = require('express');
const router = express.Router();
const Obavestenje = require('../models/obavestenje');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");


router.get('/obrisi', function (req, res) {
    Obavestenje.find({}, function (err, obavestenja) {
        if (err) {
            console.log("Nije naso obavestenja");
            console.log(err);
        } else {
            for (let obav of obavestenja) {
                if (obav.idZavoda != "5b2bbb294ab237335c4141af") {
                    console.log(obav.idZavoda);
                    Obavestenje.deleteOne({_id: obav._id}, function (err) {
                        if (err) {
                            console.log("Nije obrisao");
                        }
                    });
                }
            }
        }
    });
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "it works for get zavod"
    })
});

router.get('/all', (req, res, next) => {
    console.log("prosloGet");
    Obavestenje.find()
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
router.post('/interval1', (req, res, next) => {
    console.log("prosloGet");
    Obavestenje.find()
        .exec()
        .then(docs => {
            var niz = docs;
            var drugi;
            drugi = niz.slice(0, 3);
            console.log(docs);
            res.status(200).json(drugi);
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
    Obavestenje.find()
        .exec()
        .then(docs => {
            var niz = docs;
            var drugi;
            if (niz.length > indexOd) {
                if (niz.length > indexDo) {


                    drugi = niz.slice(indexOd, indexDo - indexOd + 1);

                    res.status(200).json(drugi);

                } else {

                    drugi = niz.slice(indexOd);

                    res.status(200).json(drugi);
                }
            } else
                return res.status(404).json({
                    message: "prevelik je pocetni index, nema toliko objava"
                })


        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});


router.post("/delete", (req, res, next) => {
    const id = req.body.id;
    Obavestenje.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});


router.post('/add', (req, res, next) => {
    // const prod = {
    //     name:req.body.name,
    //     price: req.body.price
    // };

    const obavestenje = new Obavestenje({
        _id: new mongoose.Types.ObjectId(),


        idZavoda: req.body.idZavoda,
        naslov: req.body.naslov,
        sadrzaj: req.body.sadrzaj,
        datum: req.body.datum
    });

    obavestenje.save()//mongoosova fja koja cuva
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(200).json({
        message: "it works for post",
        created: obavestenje
    })
});

router.get("/or", (req, res) => {
    Obavestenje.find({$or: [{"_id": "5b26c95935a9811544bfbcaf"}, {"_id": "5b26c96f35a9811544bfbcb0"}]}, (error2, result2) => {
        console.log(result2);
        res.status(200).send(result2);
    })
})


module.exports = router;
