"use strict";
// functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 2);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 4, 5]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('Mario', 'Hello');
console.log(result);
// optional parameters
function addTwoOrOneNumbers(a, b) {
    return b ? a + b : a;
}
console.log(addTwoOrOneNumbers(5, 10));
console.log(addTwoOrOneNumbers(5));
// default parameters
function defaultGreeting(name, greeting = 'Hello') {
    return `${greeting}, ${name}`;
}
console.log(defaultGreeting('Mario'));
console.log(defaultGreeting('Mario', 'Hi'));
