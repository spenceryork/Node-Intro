#!/usr/bin/env node

const { add } = require('./add');
const { subtract } = require('./subtract');
const { multiply } = require('./multiply');
const { divide } = require('./divide');


let num1 = +process.argv[2];
let num2 = +process.argv[4];
let calcType = process.argv[3]


// users will need to enter the following in the command line 'num1 calcType num2'

if( calcType === "+") {
    console.log(`${num1} + ${num2} =`, add(num1, num2));
} else if ( calcType === "-" ) {
    console.log(`${num1} - ${num2} =`, subtract(num1, num2));
} else if ( calcType === "x" ) {
    console.log(`${num1} * ${num2} =`, multiply(num1, num2));
} else if (calcType === "/" ) {
    console.log(`${num1} / ${num2} =`, divide(num1, num2));
} else {
    (console.log("Please enter a calucation in this format: '4 + 4'. Available operators = +, -, x, /"))
}