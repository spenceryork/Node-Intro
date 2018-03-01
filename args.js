#!/usr/bin/env node

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

let sumNums = (num1, num2) => {
    // console.log("num1", num1);
    // console.log("num2", num2);
    sum = num1 + num2;
    console.log(sum);
}

sumNums(num1, num2);