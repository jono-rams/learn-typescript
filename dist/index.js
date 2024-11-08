"use strict";
// Generics
function logAndReturnValue(arg) {
    console.log(arg);
    return arg;
}
logAndReturnValue("Hello, world!");
logAndReturnValue(123);
function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const users = [
    { name: "John", score: 100 },
    { name: "Jane", score: 95 },
    { name: "Jim", score: 90 },
    { name: "Jill", score: 85 },
];
const randomUser = getRandomArrayElement(users);
console.log(randomUser.score);
