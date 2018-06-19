const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const Novost = require('../models/novost');
const Obavestenje = require('../models/obavestenje');


router.post('/register', (req, res) => {


    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password
    });

    user.save((error, regUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = {subject: regUser._id}
            let token = jwt.sign(payload, "secretKey")
            res.status(200).send({token});
        }
    })
})

router.post("/kreiraj",(req,res,nest)=>{
    let userData=req.body;
    console.log(userData);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email:userData.email,
        password:userData.password,
        ime:userData.ime,
        prezime:userData.prezime,
        krvnaGrupa:userData.krvnaGrupa,
        tipKorisnika:userData.tipKorisnika

    })

    user.save((error, regUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = {subject: regUser._id}
            let token = jwt.sign(payload, "secretKey")
            res.status(200).send({token});
        }
    })
    
});

router.post('/addobv',(req,res,next) => {
    let id = req.body.id;
    let idObavestenja = req.body.obv;
    console.log(req.body.id);
    console.log (req.body.obv);
    User.update({_id:req.body.id},{$push :{obavestenja:idObavestenja}})
});

router.get('/register/realUser', (req, res) => {


    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: "z@z",
        password: "z",
        ime: "Zaposleni ",
        prezime: "Prezime zaposlenog",
        krvnaGrupa: "0",
        obavestenja: ["obavestenje1", "obavestenje2", "obavestenje3", "ime sigurno jos"],
        poruke: ["prva poruka", "druga poruka", "treca poruka"],
        tipKorisnika: "zaposleni"
    });

    user.save((error, regUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = {subject: regUser._id}
            let token = jwt.sign(payload, "secretKey")
            console.log("User added to database: \n" + user);
            res.status(200).send({token});
        }
    });
});

router.post("/getNovost",(req,res)=>{
    console.log (req.body.id);
    User.findOne({_id:req.body.id},(error,user)=>{
        console.log(user);
        if(error){
            res.status(404).send(error);
        }else{
             
        
            
            let user2 = user.novost.map(function(val,ind){
                return {"_id":val.idNovosti};
            })
            console.log(user2);
            Novost.find({$or:[...user2]},(error2,result2)=>{
                console.log(result2);
                res.status(200).send(result2);
            })
            
        }
        
    })
})



router.post("/getObavestenje",(req,res)=>{
    
    User.findOne({_id:req.body.id},(error,user)=>{
        if(error){
            res.status(404).send(error);
        }else{
            
            
            console.log(user)
            let user2 = user.novost.map(function(val,ind){
                return {"_id":val.idNovosti};
            })
            console.log("Novosti:");
            console.log(user2); 
            console.log('obavestenja')
            Novost.find({$or:[...user2]},(error2,data1)=>{
                
                let niz = [];
                data1.forEach(val=>{
                    val.obavestenja.forEach(val2=>{
                        niz.push(val2);
                    })
                })

                
                let data2 = niz.map(function(val,ind){
                    return {"_id":val.idObavestenja};
                }) 
                console.log(...data2);
                Obavestenje.find({$or:[...data2]},(error2,result2)=>{
                    console.log(result2);
                    res.status(200).send(result2);
                })
            })
            
        }
        
    })
})


router.get('/removeUser', (req, res) => {
    User.remove({tipKorisnika: "zaposleni"}, function (err) {
        if (err) {
            console.log("shit happened");
            res.status(304).send("shit")
        } else {
            console.log("sve ooookeeee");
            res.status(200).send("sve ooook");
        }
    })
});

router.post('/DodajNovost',(req,res) => {
    let trenutnaNovost = {idNovosti:req.body.idNovosti};
    console.log(trenutnaNovost);
    User.findOneAndUpdate({_id:req.body.id},{$push :{novost:trenutnaNovost}},(error, user)=>{
        if(error){
            res.status(404).send(error)
        }else{
          res.status(200).send(user);  
        }
    })
    
   
})

router.post("/deleteall", (req,res)=> {
    console.log("delete all");
    User.deleteMany({} ,err => {
        res.status(200).send("obrisano");
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;

    console.log("User trying to login: " + userData.email + "->" + userData.password);

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                console.log("Invalid e-mail");
                res.status(401).send("Invalid user")//email
            } else if (user.password !== userData.password) {
                console.log("Wrong password");
                res.status(401).send("invalid pass")//password
            } else {
                console.log("Valid data... user logged in");
                console.log("User data: " + user);
                let payload = {subject: User._id}
                let token = jwt.sign(payload, "secretKey")
                res.status(200).send({token: token, userData: user});
            }

        }
    })


})

router.get('/all', (req, res, next) => {
    User.find()
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






module.exports = router;