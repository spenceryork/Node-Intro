#!/usr/bin/env node

const { Database } = require('sqlite3').verbose();

const db = new Database('example.sqlite', () => console.log('Connected!'));

// Create table
db.run("CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT)");

// Insert employee info. Both will insert info, they just use a different syntax.
db.run("INSERT INTO employees (id, first, last) VALUES (1, 'Michael', 'Scott')");
db.run("INSERT INTO employees VALUES (2, 'Jim', 'Halpert')", errorHandler);


// Array that holds additional employee info.
const employeeArray = [
    { id: 3, firstName: 'Dwight', lastName: 'Schrute' },
    { id: 4, firstName: 'Andy', lastName: 'Bernard' },
    { id: 5, firstName: 'Pam', lastName: 'Beesly' }
  ];


// Create an insert statement for each object
employeeArray.forEach((obj) => {
    db.run(`INSERT INTO employees VALUES (${obj.id}, '${obj.firstName}', '${obj.lastName}')`);
});


// Query all the data
db.all("SELECT * FROM employees", (err, allRows) => {
    errorHandler(err);
    allRows.forEach(each => {
        console.log(each.id, each.first + ' ' + each.last);
    });
});


// Create error handler
const errorHandler = (err) => {
    if (err) {
        console.log(`Msg: ${err}`);
    };
};


// Closing the database connection
db.close(err => {
    errorHandler(err); 
    console.log('Database closed');
});

