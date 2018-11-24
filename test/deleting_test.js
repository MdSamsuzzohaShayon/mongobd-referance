const assert = require('assert');
const MarioChar = require('../models/moariochar');


describe("deleting record", () => {

    let char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(()=> {
            done();
        });
    });


    it('Delete one records from db', (done) => {
        MarioChar.findOneAndRemove({name:'Mario'}).then(()=>{
            MarioChar.findOne({name:'Mario'}).then((result)=>{
                assert(result === null);
                done();
            })
        });
    });
});