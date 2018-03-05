#!/usr/bin/env node

const { Database } = require('sqlite3').verbose();

const db = new Database('employeeTable.sqlite', () => console.log('You are connected!'));

db.run("DROP TABLE IF EXISTS employees");
db.run("CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)");

let eeArray = [
    { 
        id: 0, 
        firstName: 'Fred',
        lastName: 'Smith', 
        jobTitle: 'Cashier', 
        address: '500 Somewhere Lane' ,
        salary: 50000
    },
    { 
        id: 1, 
        firstName: 'Phil',
        lastName: 'Phillips', 
        jobTitle: 'Accountant', 
        address: '212 New Road',
        salary: 79000
    },
    { 
        id: 2, 
        firstName: 'Susan',
        lastName: 'Susanson', 
        jobTitle: 'CEO', 
        address: '244 Rich Drive',
        salary: 55000 
    },
    { 
        id: 3, 
        firstName: 'Wendy',
        lastName: 'Burger', 
        jobTitle: 'Cook', 
        address: '42 Road Road',
        salary: 40000 
    },
    { 
        id: 4, 
        firstName: 'Brent',
        lastName: 'Hutt', 
        jobTitle: 'Driver', 
        address: '53 Time Road', 
        salary: 32000
    },
    { 
        id: 5, 
        firstName: 'Jill',
        lastName: 'Jack', 
        jobTitle: 'Runner', 
        address: '54766 Long Drive',
        salary: 150000
    },
    { 
        id: 6, 
        firstName: 'Phylis',
        lastName: 'Lamp', 
        jobTitle: 'Sales', 
        address: '88 Crooker Street',
        salary: 67000 
    },  
]


eeArray.forEach((employee) => {
    db.run(`INSERT INTO employees VALUES ('${employee.id}', '${employee.firstName}', '${employee.lastName}', '${employee.jobTitle}', '${employee.address}', '${employee.salary}')`);
});

// Write a statement to query the database and console.log() all employee records.
db.all("SELECT * FROM employees", (err, allRows) => {
    allRows.forEach(each => {
        console.log(`Employee: ${each.firstName} ${each.lastName}, Job Title: ${each.jobTitle}, Address: ${each.address}, Salary: $${each.salary}`)
    });
});

// Write a statement to query the database and console.log() each employees jobTitle.
db.all("SELECT * FROM employees", (err, allRows) => {
    allRows.forEach(each => {
        console.log(`Employee: ${each.firstName} ${each.lastName}, Job Title: ${each.jobTitle}`)
    });
});

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.
db.all("SELECT * FROM employees", (err, allRows) => {
    allRows.forEach(each => {
        console.log(`Employee: ${each.firstName} ${each.lastName}, Address: ${each.address}`)
    });
});

// Write a statement that returns all employees of a specified jobTitle.
db.all("SELECT * FROM employees WHERE jobTitle ='Sales'", (err, allRows) => {
    allRows.forEach(each => {
        console.log(`JOB QUERY - Employee: ${each.firstName} ${each.lastName}, Address: ${each.address}`)
    });
});