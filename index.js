const { MongoClient } = require('mongodb');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

const url = 'mongodb://localhost:27017/shop';

MongoClient.connect(url)
.then(db => {
    app.listen(3000, () => console.log('Server started!'));
    const words = db.collection('words');
    return words.find().toArray();
})
.then(result => console.log(result))
.catch(err => console.log(err.message));
