"use strict";
// function signatures
function add(a, b) {
    return a + b;
}
function multiply(first, second) {
    return first * second;
}
function square(num) {
    return num * num;
}
function joinTwoNumbers(first, second) {
    return `${first}${second}`;
}
let calcs = [];
calcs.push(add);
calcs.push(multiply);
calcs.push(square);
const shapeOne = {
    name: 'square',
    calcArea: (length) => length * length
};
const shapeTwo = {
    name: 'circle',
    calcArea: (radius) => Math.PI * radius ^ 2
};
console.log(shapeOne.calcArea(10));
console.log(shapeTwo.calcArea(10));
