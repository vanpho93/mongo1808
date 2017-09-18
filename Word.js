const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const WordSchema = new mongoose.Schema({
    vn: String,
    en: String
});

const Word = mongoose.model('Word', WordSchema);

const uri = 'mongodb://localhost/shop';

mongoose.connect(uri, { useMongoClient: true });

mongoose.connection.once('open', () => {
    const remote = new Word({ en: 'remote', vn: 'điều khiển' });
    remote.save()
    .then(() => console.log('Saved'));
});