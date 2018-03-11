const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bag-o-loot.sqlite', (err) => {
    if (err) return console.log("db don't work");
    console.log("Connection to db successful");
})

module.exports.addKid = ({kid, toy}) => {
    let newKid = {
        kid: kid,
        toy: toy,
        delivered: "false",
        naughty: "false"
    }
    return new Promise( (resolve, reject) => {
        db.run(`INSERT INTO kids VALUES (null,
        "${newKid.kid}",
        "${newKid.toy}",
        "${newKid.delivered}",
        "${newKid.naughty}"
        )`, function(){
            resolve({id: this.lastID});
            console.log("What is id: this.lastID?", this.lastID);
        });
    });
}