const mongoose = require('mongoose');

const porukaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    ime: String,
    prezime: String,
    brojDavaoca:String,
    poruka: String,
    idZavoda:String
});

module.exports = mongoose.model('poruka', porukaSchema);