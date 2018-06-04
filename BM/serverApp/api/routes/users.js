const express= require('express');
const router = express.Router();
const User =require('../models/user');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");


router.post('/register', (req,res)=> {
    
    
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password:req.body.password
    });

    user.save ((error,regUser)=> {
        if (error) {
            console.log(error);
        } else { 
            let payload = {subject: regUser._id}
            let token = jwt.sign(payload,"secretKey")
            res.status(200).send({token});
        }
    })
})

router.post('/login', (req,res)=> {
   let userData = req.body;

   User.findOne({email:userData.email}, (error,user)=>{
        if(error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send("Invalid user")//email
            } else
            if (user.password !== userData.password){
                res.status(401).send("invalid pass")//password
            } else {
                let payload = {subject: User._id}
                let token = jwt.sign(payload,"secretKey")
                res.status(200).send({token});
            }
            
        }
   })
    
   
})
router.get('/all',(req,res,next)=>{
    User.find()
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

module.exports = router;