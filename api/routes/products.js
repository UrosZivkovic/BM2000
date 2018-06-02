const express= require('express');
const router = express.Router();
const Product =require('../models/product');
const mongoose = require('mongoose');


router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"it works for get"
    })
    });
    
router.get('/all',(req,res,next)=>{
    Product.find()
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


router.post('/',(req,res,next)=>{
    // const prod = {
    //     name:req.body.name,
    //     price: req.body.price
    // };

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price:req.body.price
    });

    product.save()//mongoosova fja koja cuva
    .then(result => {
        console.log(result);
    })
    .catch(err=>console.log(err));

    res.status(200).json({
        message:"it works for post",
        createdProduct: product
    })
});



module.exports = router;