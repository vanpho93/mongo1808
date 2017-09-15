const { MongoClient } = require('mongodb');
const express = require('express');

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

const url = 'mongodb://localhost:27017/shop';

MongoClient.connect(url)
.then(db => {
    app.listen(3000, () => console.log('Server started!'));
    wordsCollection = db.collection('words');
})
.catch(err => console.log(err.message));
