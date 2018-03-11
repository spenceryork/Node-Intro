const { createTables } = require('../js/make-table');
const { getKidList } = require('../js/kidList');
const { assert: { equal, isFunction, isObject, isArray } } = require('chai');

describe('kid List Module', () => {
    describe('Attempting to view all the kids receiving toys', () => {
        it('should be a function', () => {
            isFunction(getKidList);
        });
    });
});