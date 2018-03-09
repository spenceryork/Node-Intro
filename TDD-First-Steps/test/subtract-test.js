const { subtract } = require('../subtract');
const { assert: { equal, isFunction, isNotNaN } } = require('chai');

describe('subtract', () => {
    it('should be a function', () => {
        isFunction(subtract);
    });
    it('should return a number', () => {
        equal(2, subtract(4, 2));
    });
    it('should always be a number', () => {
        isNotNaN(subtract(3,2));
    });
});