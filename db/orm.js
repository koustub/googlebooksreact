const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/Books', {useNewUrlParser: true, useUnifiedTopology: true,});
mongoose.set('useCreateIndex', true);

// include mongoose models (it will include each file in the models directory)
const Books = require( './models/Books.js' );

function saveBook(data){
    const book = {
        title :  data.title,
        imageLink :  data.imageLink,
        authors : data.authors,
        description : data.description,
        index:data.index
    }
    const dbBook = new Books( book );
    return dbBook.save();
}

function getBook(){
    return Books.find();
}
async function removeBook(title){
    const result = await  Books.deleteOne({title: `${title}`});
    result.deletedCount;
}

module.exports = {
    saveBook,
    getBook,
    removeBook
}