"use strict";
// union types
let someId;
someId = '123';
someId = 123;
console.log(someId);
let email = null;
email = 'mario@gmail.com';
email = null;
let anotherId;
anotherId = 'hfe7few7322h73f9';
anotherId = 5;
// union types pitfall
function swapIdType(id) {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    return id;
}
swapIdType('5');
