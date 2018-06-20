const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
    ime: String,
    prezime: String,
    brojDavaoca:String,
    krvnaGrupa: String,
    obavestenja: [String],
    poruke: [{idPoruke:String}],
    tipKorisnika: String,
    novost: [{idNovosti:String}],
    davanja:[{date:String}]
});

module.exports = mongoose.model('user', userSchema);