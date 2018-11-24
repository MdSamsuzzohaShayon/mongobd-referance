const assert = require('assert');
const MarioChar = require('../models/moariochar');


describe("finding record", () => {

    let char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(()=> {
            done();
        });
    });


    it('finds one records from db', (done) => {
        MarioChar.findOne({name:'Mario'}).then((result)=>{
            assert(result.name === "Mario");
            done();
        });
    });


    //FINDING BY OBJECT ID
    it('finds one record by id from db', (done) => {
        MarioChar.findOne({_id:char._id}).then((result)=>{
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });
});