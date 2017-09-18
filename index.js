const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });

let wordsCollection;

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    wordsCollection.find().toArray()
    .then(result => res.render('home', { arrWords: result }))
    .catch(err => res.send(err.message));
});

app.post('/add', parser, (req, res) => {
    const { vn, en } = req.body;
    wordsCollection.insert({ vn, en })
    .then(() => res.redirect('/'))
    .catch(err => res.send(err.message));
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    wordsCollection.remove({ _id: ObjectId(id) })
    .then(() => res.redirect('/'))
    .catch(err => res.send(err.message));
});

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    wordsCollection.findOne({ _id: ObjectId(id) })
    .then(result => res.render('edit', { result }))
    .catch(err => res.send(err.message));
});

app.post('/edit/:id', parser, (req, res) => {
    const { id } = req.params;
    const { vn, en } = req.body;
    wordsCollection.updateOne({ _id: ObjectId(id) }, { en, vn })
    .then(() => res.redirect('/'))
    .catch(err => res.send(err.message));
});

const url = 'mongodb://localhost:27017/shop';

MongoClient.connect(url)
.then(db => {
    app.listen(3000, () => console.log('Server started!'));
    wordsCollection = db.collection('words');
})
.catch(err => console.log(err.message));
