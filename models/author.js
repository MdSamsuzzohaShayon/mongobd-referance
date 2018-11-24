const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title: String,
    pages: Number
});


const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books:[BookSchema]
});



//CREATING MODELS HERE FOR OUR COLLECTION
const Author = mongoose.model("author", AuthorSchema)
module.exports = Author;


//MOCHA IS A TESTING LIBRARY. JUST USE FOR TEST