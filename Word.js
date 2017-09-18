const mongoose = require('mongoose');

const uri = 'mongodb://localhost/shop';

mongoose.connect(uri, { useMongoClient: true });

mongoose.connection.once('open', () => {
    console.log('Connected');
});