
const { assert: { isFunction, isNumber, oneOf } } = require('chai');
const { roll, toDiceNotation } = require('../lib/dice');

describe('dice module', () => {
    describe('roll', () => {
        it('should be a function', () => {
            isFunction(roll);
        });

    // should return a number
        it('should be a number', () => {
            isNumber(roll("2d6"));
        });

        it("should accept a string and return a computed number", () => {
            for (let i = 0; i < 10; i++) {
                let diceNotation = `${i}d6`;
                oneOf(roll(diceNotation), Array.from(Array(61).keys()));
            }
        });
    });

});