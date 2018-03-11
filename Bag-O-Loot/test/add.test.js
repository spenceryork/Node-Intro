const { createTables } = require('../js/make-table');
const { addKid } = require('../js/add');
const { assert: { equal, isFunction, isObject, isArray } } = require('chai');

describe('Add module', () => {

    beforeEach( (done) => {
        createTables()
        .then( () => {
            done();
        }) 
    })

    let newKid = {
        kid: 'Randy',
        toy: 'coloring book',
        delivered: 'false',
        naughty: 'true' 
    }

    let kid = "Wendy";
    let toy = "hamburger";

    describe('Adding a kid to the bag-o-loot', () => {
        it('should be a function', () => {
            isFunction(addKid);
        });
        it('should add a kid to the database', () => {
            return addKid(kid, toy)
            .then( (kidObj) => {
                isObject(kidObj);
                equal(7, kidObj.id);
                console.log("kidObj", kidObj);
            });
        });
    });

});