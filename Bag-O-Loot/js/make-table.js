const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bag-o-loot.sqlite');
const { kids } = require('../data/kids');


module.exports.createTables = () => {
    return new Promise( (resolve, reject) => {
        db.run('DROP TABLE IF EXISTS kids')
        .run(
            'CREATE TABLE IF NOT EXISTS kids (id INTEGER PRIMARY KEY AUTOINCREMENT, kid TEXT, toy TEXT, delivered TEXT, naughty TEXT)', 
            (err) => {
                if (err) return reject(err);
                resolve(insertRows());
            });
    });
};

const insertRows = () => {
    return Promise.all(kids.map( ({kid, toy, delivered, naughty}) => {
        return new Promise( (resolve, reject) => {
            db.run(`INSERT INTO kids VALUES (null, "${kid}", "${toy}", "${delivered}", "${naughty}")`, function(err) {
                if(err) return reject(err);
                resolve(this.lastID)
            });
        });
    }));
};