const express = require('express');
const mongoose = require('mongoose');
const Word = require('./Word');
mongoose.Promise = global.Promise;

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    Word.find({})
    .then(result => res.render('home', { arrWords: result }));
});

const uri = 'mongodb://localhost/shop';

mongoose.connect(uri, { useMongoClient: true });
mongoose.connection.once('open', () => {
    app.listen(3000, () => console.log('Server started!'));
});