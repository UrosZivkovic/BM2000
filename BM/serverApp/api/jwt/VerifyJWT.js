const express= require('express');
const router = express.Router();
const User =require('../models/user');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");

module.exports = {

   privateKey : "secretKey",

   veryfToken: function( req,res,next){
    if (!req.headers.autorization){
        return res.status(401).send("Unauthorized request")
    }
    let token = req.headers.autorization.split(" ")[1]
    if (token === "null"){
        return res.status(401).send("Unauthorized request")
    }
    let payload = jwt.verify(token, privateKey);
    if(payload){
        return res.status(401).send(privateKey);

    }
    req.userId= payload.subject;
    next();
}
}
