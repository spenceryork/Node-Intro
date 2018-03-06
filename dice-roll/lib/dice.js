'use strict'

const { randomInt } = require('./math')

module.exports.toDiceNotation = (count, sides) => {
    let diceString = `${count}d${sides}`;
    return diceString;
}

module.exports.roll = (diceString) => {
    let nums = diceString.split("d");
    let low = nums[0];
    let high = nums[1];
    return randomInt(low, high);
}