const mongoose = require('mongoose');

const novostSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idZavoda: String,
    naslov: String,
    sadrzaj: String,
    datum: String

});

// v2
const novostSchema2 = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idZavoda: String,
    naslov: String,
    sadrzaj: String,
    datum: String,

    // redni broj pri ucitavanju na stranici da bi mogli da se ucitavaju iz delova
    redniBroj: Number,
    // id zaposlenog koji ga je kreirao
    idZaposlenog: String
});

module.exports = mongoose.model('novost', novostSchema);