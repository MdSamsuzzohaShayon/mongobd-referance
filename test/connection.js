const mongoose = require('mongoose');

//ES6 PROMISES
mongoose.Promise = global.Promise;


//CONNECT TO THE DB BEFORE TEST RUN BY USING MOCHA HOOKS
before(function (done) {
    // CONNECT WITH MONGODB
    mongoose.connect('mongodb://localhost/testaroo'); //IF TESTAROO DB IS ALREADY EXIST THEN OK. OR IF IT ISN'T IT WILL CREATE AUTOMATICLY
    mongoose.connection.once('open', function () {
        console.log("Connection has been made now let's make fireaowks");
        done();
    }).on('error', function (error) {
        console.log('Connection', error);
    });
})


// DROP/DELETE THE CHARECTERS COLLECTION BEFORE EACH TEST
beforeEach(function (done) {
    //DROP THE COLLECTIONS
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    });
});