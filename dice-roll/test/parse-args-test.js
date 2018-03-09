const { assert: { isFunction, isNumber, oneOf } } = require('chai');
const { count, sides } = require('../lib/parse-args');

describe('parse-args module', () => {
    describe('count', () => {
        it('should be a number', () => {
            isNumber(count);
        });
    });
    describe('sides', () => {
        it('should be a number', () => {
            isNumber(sides);
        });
    });

});