const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let books = new Schema ({
    title :  { type: String },
    imageLink :  { type: String },
    authors : { type: [String]},
    description : { type: String, trim: true },
    index:{type:Number}
} );

module.exports = mongoose.model('books', books);