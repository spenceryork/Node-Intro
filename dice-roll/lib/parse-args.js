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

// Another way to do the if statements (with a terinary statement)

// module.exports = ([num, sides]) => {
    // const dieNums = {};
    // dieNums.count = sides ? num : 1;
    // dieNums.sides = sides || num || 6;
    // return dieNums
// }