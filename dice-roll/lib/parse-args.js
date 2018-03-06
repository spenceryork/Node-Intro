'use strict'

module.exports = (args) => {
    let diceObj = {};
    if (args.length === 0) {
        diceObj.count = '1';
        diceObj.sides = '6';
    } else if (args.length === 1) {
        diceObj.count = '1';
        diceObj.sides = args[0];
    } else if (args.length === 2) {
        diceObj.count = args[0];
        diceObj.sides = args[1];
    } else {
        console.log("Error: You can only enter two numbers in the command line!");
    }
    return diceObj;
}