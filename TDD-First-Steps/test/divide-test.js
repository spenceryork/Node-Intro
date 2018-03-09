const { divide } = require('../divide');
const { assert: { equal, isFunction, isNotNaN } } = require('chai');

describe('divide', () => {
    it('should be a function', () => {
        isFunction(divide);
    });
    it('should return a number', () => {
        equal(2, divide(4, 2));
    });
    it('should always be a number', () => {
        isNotNaN(divide(3,2));
    });
});