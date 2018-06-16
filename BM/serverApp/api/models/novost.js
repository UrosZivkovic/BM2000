const mongoose = require('mongoose');

const novostSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idZavoda:String,
    naslov:String,
    sadrzaj:String,
    datum:String
    
});

module.exports = mongoose.model('novost', novostSchema);