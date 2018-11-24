const assert = require('assert');
const mongoose = require('mongoose');
const Author = require("../models/author");



describe("nesting records", () => {
    it("create an author with sub-documents", (done) => {
        let pat = new Author({
            name: "Stephen King",
            books: [{
                title: 'The Shining (novel)',
                pages: 447
            }]
        });

        pat.save().then(()=>{
            Author.findOne({name:"Stephen King"}).then((record)=>{
                assert(record.books.length === 1);
                done();
            });
        });
    });
});