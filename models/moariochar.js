const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//CREATE SCHEMA AND MODELS
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});



//CREATING MODELS HERE FOR OUR COLLECTION
const MarioChar = mongoose.model("mariochar", MarioCharSchema)
module.exports = MarioChar;


//MOCHA IS A TESTING LIBRARY. JUST USE FOR TEST