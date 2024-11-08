"use strict";
// extending type aliases
const personOne = {
    id: 1,
    firstName: 'mario'
};
const personTwo = {
    id: 2,
    firstName: 'luigi',
    email: 'luigi@gmail.com'
};
const personThree = {
    email: 'peach@gmail.com'
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
// printUser(personOne);
printUser(personTwo);
// printUser(personThree);
