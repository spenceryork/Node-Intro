#!/usr/bin/env node

const { createReadStream, createWriteStream, appendFile, writeFile } = require("fs");
const { Transform, Writable } = require("stream");
const yell = Transform();
const writeStream = Writable();

const file = process.argv[2];
const writeThis = process.argv[3];


yell._transform = (buffer, _, callback) => {
    callback(null, buffer.toString().toUpperCase());
} 

writeStream._write = (buffer, _, next) => {
    writeFile(writeThis, buffer, (err) => {
        if(err) throw err;
        console.log("The data was added to the json file!");
    });
    next();
};

createReadStream(file)
.pipe(yell)
.pipe(writeStream);