const assert = require('assert');
const MarioChar = require('../models/moariochar');


describe("updating record", () => {

    let char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });
        char.save().then(()=> {
            done();
        });
    });


    it('update one records in the db', (done) => {
        MarioChar.findOneAndUpdate({name:'Mario'},{name: "Luigi"}).then(()=>{
            MarioChar.findOne({_id:char._id}).then((result)=>{
                assert(result.name === "Luigi");
                done();
            });
        });
    });

    it('increment weight in db', (done) => {
        MarioChar.update({}, {$inc: {weight: 1}}).then(()=>{
            MarioChar.findOne({name:'Mario'}).then((record)=>{
                assert(record.weight === 51);
                done();
            });
        });
    });
    
});