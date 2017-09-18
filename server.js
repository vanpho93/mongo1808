const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser').urlencoded({ extended: false });

const Word = require('./Word');
mongoose.Promise = global.Promise;

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    Word.find()
    .then(result => res.render('home', { arrWords: result }));
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    Word.findByIdAndRemove(id)
    .then(() => res.redirect('/'))
    .catch(err => res.send(err.message));
});

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    Word.findById(id)
    .then(result => res.render('edit', { result }))
    .catch(err => res.send(err.message));
});

app.post('/edit/:id', parser, (req, res) => {
    const { id } = req.params;
    const { en, vn } = req.body;
    Word.findByIdAndUpdate(id, { en, vn })
    .then(() => res.redirect('/'))
    .catch(err => res.send(err.message));
});

app.post('/add', parser, (req, res) => {
    const { en, vn } = req.body;
    const word = new Word({ en, vn });
    word.save()
    .then(() => res.redirect('/'))
    .catch(err => res.send(err.message));
});

const uri = 'mongodb://localhost/shop';

mongoose.connect(uri, { useMongoClient: true });
mongoose.connection.once('open', () => {
    app.listen(3000, () => console.log('Server started!'));
});