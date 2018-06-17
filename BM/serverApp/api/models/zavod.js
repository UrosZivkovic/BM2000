const mongoose = require('mongoose');

const zavodSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idZavoda:String,
    naslov:String,
    sadrzaj:String,
    datum:String,
    obavestenja:[String]
});

module.exports = mongoose.model('zavod', zavodSchema);