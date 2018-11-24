const assert = require('assert');
const MarioChar = require('../models/moariochar');


//DESCRIBE TEST
describe('Saving record', function () {


    //CREATE TESTS

    it("saves records to the database", function (done) {
        //The assert module provides a simple set of assertion tests that can be used to test invariants. (Claim, )
        //assert(2+3 === 5);
        //CREATING NEW MARIO CHARECTER
        let char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });

    //NEXT TEST
});