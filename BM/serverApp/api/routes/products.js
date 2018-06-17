const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const mongoose = require("mongoose");
const VerifyJWT = require("../jwt/VerifyJWT");

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "it works for get"
    });
});

router.get("/all", (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post("/", (req, res, next) => {
    // const prod = {
    //     name:req.body.name,
    //     price: req.body.price
};
router.post('/add', (req, res, next) => {
    // const prod = {
    //     name:req.body.name,
    //     price: req.body.price
};

const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
});

product
    .save() //mongoosova fja koja cuva
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

res.status(200).json({
    message: "it works for post",
    createdProduct: product
});
})
;
//router.get("/normal",VerifyJWT.veryfToken,(req,res)=>{
router.get("/normal", (req, res) => {
    let normal = [
        {
            _id: "1",
            name: "ime1",
            price: "3"
        }
    ];
    // ja probao
    res.json(normal);
});

router.get("/special", (req, res) => {
    let special = [
        {
            _id: "2",
            name: "ime1Spec",
            price: "5"
        }
    ];
    res.status(200).json(special);
});

module.exports = router;
