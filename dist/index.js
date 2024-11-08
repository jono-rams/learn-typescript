"use strict";
// type guards
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.username, value.email);
    }
    else {
        console.log(value.firstName, value.age);
    }
}
