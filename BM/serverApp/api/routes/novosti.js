const express = require('express');
const router = express.Router();
const Novost = require('../models/novost');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const Obavestenje = require('../models/obavestenje');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "it works for get zavod"
    })
});
 
router.get('/all', (req, res, next) => {
    Novost.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.get("next", function (req, res, next) {

    // uzmi index iz url-a i pribavi jos 10 posta

});

router.get("/or", (req, res) => {
    Novost.find({$or: [{"_id": "5b26c8c035a9811544bfbcad"}, {"_id": "5b26c8ed35a9811544bfbcae"}]}, (error2, result2) => {
        console.log(result2);
        res.status(200).send(result2);
    })
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

router.post('/zavodNovostiInterval', (req, res, next) => {
    console.log("stigao");
    const indexOd = req.body.firstIndex;
    const indexDo = req.body.lastIndex;
    console.log(indexOd, indexDo);
    Novost.find()
        .where('idZavoda')
        .equals(req.body.idZavoda)
        .sort('-date')
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


router.post("/deleteall", (req, res) => {
    console.log("delete all");
    Novost.deleteMany({}, err => {
        res.status(200).send("obrisano");
    })
});


router.post("/getObavestenja", (req, res) => {
    console.log("uslo u getObv");
    Novost.findOne({_id: req.body.id}, (error, data) => {
        if (error) {
            res.status(404).send(error);
        } else {


            console.log(data);
            console.log("--------------------------")
            let data2 = data.obavestenja.map(function (val, ind) {
                return {"_id": val.idObavestenja};
            })
            console.log(...data2);
            Obavestenje.find({$or: [...data2]}, (error2, result2) => {
                console.log(result2);
                res.status(200).send(result2);
            })

        }

    })
})

router.post('/dodajObavestenje', (req, res) => {
    let trenutnoObavestenje = {idObavestenja: req.body.idObavestenja};
    console.log(trenutnoObavestenje);
    Novost.findOneAndUpdate({_id: req.body.id}, {$push: {obavestenja: trenutnoObavestenje}}, (error, user) => {
        console.log("proslo");
        if (error) {
            res.status(404).send(error)
        } else {
            res.status(200).send(user);
        }
    })


})


router.post("/delete", (req, res, next) => {
    const id = req.body.id;
    Novost.remove({_id: id})
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


router.post('/intervalTest', (req, res, next) => {
    Novost.find({}).sort('naslov').exec((err, data) => {
        if (err) {
            res.status(404).send(err)
        }
        else {
            res.status(200).send(data);
        }
    })
})

router.post('/interval', (req, res, next) => {
    console.log("stigao");
    const indexOd = req.body.firstIndex;
    const indexDo = req.body.lastIndex;
    console.log(indexOd, indexDo);
    Novost.find()
        .sort('-date')
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


module.exports = router;