#!/usr/bin/env node

// const { readFileSync } = require("fs");

// const fileArg = process.argv[2];
// // could also use:
// const [,,fileArg] = process.argv;

// console.log("fileArg", fileArg);

// if (fileArg) {
//     try {
//         const data = readFileSync(fileArg);
//         process.stdout.write(data.toString());
//     } catch (err) {
//         console.log("Error", err);
//     }
// } else {
//     console.log("Please pass in a file to read");
//     process.exit();
// }

// console.log("This is the synchronous version");

// const { createReadStream, createWriteStream, appendFile, writeFile } = require("fs");
// const { Transform, Writable } = require("stream");
// const upperCaseify = Transform();
// const writeStream = Writable();

// // console.log("upperCasify", upperCaseify._transform);

// upperCaseify._transform = (buffer, _, callback) => {
//     callback(null, buffer.toString().toUpperCase());
// } 

// writeStream._write = (buffer, _, next) => {
//     writeFile("messageUppercase.txt", buffer, (err) => {
//         if(err) throw err;
//         console.log("The data to write was added to the file!");
//     });
//     next();
// };

// createReadStream(fileArg)
// .pipe(upperCaseify)
// .pipe(writeStream);


//// Now let's search for words in our machine's dictionary

const userInput = process.argv[2] ? process.argv[2].toLowerCase() : null;
const { createReadStream } = require('fs');
const { Writable } = require('stream');
const { map, split } = require('event-stream');
const limitToTen = require('./transforms/limit_to_ten');


const writeStream = Writable();
const wordListStream = createReadStream('/usr/share/dict/words');

writeStream._write = (word, _, next) => {
    if (word.toString() === "limit reached") {
        console.log("limit reached");
        process.exit();
    }
    process.stdout.write(word);
    next();
};

if (!userInput) {
    console.log("Usage: readfile [search term]");
    process.exit();
}

wordListStream
.pipe(split())
.pipe(map( (word, next) => {
    word.toString().toLowerCase().includes(userInput) ? next(null, word + "\n") : next();
}))
.pipe(limitToTen())
.pipe(writeStream);














