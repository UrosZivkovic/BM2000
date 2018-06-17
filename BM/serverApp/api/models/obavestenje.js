const mongoose = require('mongoose');

const obavestenjeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idZavoda:String,
    naslov:String,
    sadrzaj:String,
    datum:String
    
});

module.exports = mongoose.model('obavestenje', obavestenjeSchema);