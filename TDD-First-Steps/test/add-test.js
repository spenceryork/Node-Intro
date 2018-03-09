const { add } = require('../add');
const { assert: { equal, isFunction, isNotNaN } } = require('chai');

describe('add', () => {
    it('should be a function', () => {
        isFunction(add);
    });
    it('should add two numbers', () => {
        equal(3, add(1, 2));
    });
    it('should always be a number', () => {
        isNotNaN(add(2,2));
    })
});
