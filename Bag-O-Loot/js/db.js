const sqlite3 = require('sqlite3').verbose();
const { createTables } = require('./make-table');

(function createDb() {
    new sqlite3.Database('bag-o-loot.sqlite', () => {
        createTables()
        .then( (data) => {
            console.log("kids", data);
        })
        .catch( (err) => {
            console.log("oops", err);
        });
    });
}());