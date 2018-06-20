const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");


router.post("/kreiraj", (req, res, nest) => {
    let userData = req.body;
    console.log(userData);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: userData.email,
        password: userData.password,
        ime: userData.ime,
        prezime: userData.prezime,
        krvnaGrupa: userData.krvnaGrupa,
        tipKorisnika: userData.tipKorisnika,
        brojDavaoca: userData.brojDavaoca,
        idZavoda: userData.idZavoda

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




module.exports = router;