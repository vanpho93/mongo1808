const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    vn: String,
    en: String
});

const Word = mongoose.model('Word', WordSchema);

module.exports = Word;
