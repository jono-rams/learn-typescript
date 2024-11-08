// any type

let age: any = 25;
let title;

age = 'Twenty five';

console.log(age);

title = 25;
title = {
    hello: 'world'
};

// any type in arrays

let numbers: any[] = [true, 1, 2, 3, 4, 5, null, undefined];

numbers.push('six');

console.log(numbers);

// functions & any

function addTogether(value: any) {
    return value + value;
}

const result = addTogether(1.5);

console.log(addTogether(10));
console.log(addTogether('Hello'));

// useful when migrating from JS to TS
// because using any won't cause errors initially
