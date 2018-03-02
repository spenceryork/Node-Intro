#!/usr/bin/env node

const { readFile } = require("fs");

const file = process.argv[2];

readFile("file-io.json", (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
});
