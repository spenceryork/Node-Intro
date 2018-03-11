const { createTables } = require('../js/make-table');
const { removeToy } = require('../js/remove');
const { assert: { equal, isFunction, isObject, isArray } } = require('chai');

describe('Remove Module', () => {
    // This child is 'id 3', if that has been removed then this works.
    let kid = 'June';
    let toy = 'guitar';
    describe('Removing a toy from the bag-o-loot', () => {
        it('should be a function', () => {
            return removeToy(kid, toy)
            .then( (data) => {
                isFunction(removeToy);
                equal(1, data);
            });
        });
    });
});