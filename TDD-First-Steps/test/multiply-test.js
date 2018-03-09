const { multiply } = require('../multiply');
const { assert: { equal, isFunction, isNotNaN } } = require('chai');

describe('multiply', () => {
    it('should be a function', () => {
        isFunction(multiply);
    });
    it('should return a number', () => {
        equal(8, multiply(4, 2));
    });
    it('should always be a number', () => {
        isNotNaN(multiply(3, 2));
    });
});