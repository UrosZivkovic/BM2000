//@bm2000db
//BM2000Admin
//Admin
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');



const productRoutes = require('../api/routes/products');

mongoose.connect('mongodb://BM2000Admin:bmadmin@bloodmasters2000-shard-00-00-xxpcx.mongodb.net:27017,bloodmasters2000-shard-00-01-xxpcx.mongodb.net:27017,bloodmasters2000-shard-00-02-xxpcx.mongodb.net:27017/test?ssl=true&replicaSet=BloodMasters2000-shard-0&authSource=admin');

app.use(morgan('dev')); //za logovanje zahteva
app.use(bodyParser.urlencoded({extended: false}));//samo prosti zahtevi
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); //CORS???
    res.header('Access-Control-Allow-Headers','*');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Alow-Methonds','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});




app.use('/products',productRoutes);
app.use(express.static(path.join(__dirname +'/../dist/')));





//app.use('/',(req,res,next)=>{res.status(200).json({message:"it works!"})});

app.use((req,res,next)=>{
    const error = new Error("Page not found");
    error.status=404;
    next(error);
})
app.use((error, req, res, next)=>{
    res.status(error.status|| 500);
    res.json({
        error:{
            message: error.message
        }
    });
});



module.exports = app;