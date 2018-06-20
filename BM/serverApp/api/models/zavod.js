const mongoose = require('mongoose');

const zavodSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idZavoda: String,
    drzava: String,
    grad: String,
    adresa: String,
    naziv: String,
    obavestenja: [String]
});

module.exports = mongoose.model('Zavod', zavodSchema);