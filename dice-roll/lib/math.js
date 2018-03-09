"use strict";

module.exports.randomInt = (low, high) => {
    return Math.floor(Math.random() * ((high-low)+1) + low);
}

// Different way to return this object

// const randomInt = (bottom, top) => {
//     if(!top) top = 6;
//     return Math.floor((Math.random() * +top) + bottom)
// }

// module.exports = { randomInt }