const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bag-o-loot.sqlite', (err) => {
    if (err) return console.log("db don't work");
    console.log("Connection to db successful");
});

module.exports.getKidList = () => {
    
}