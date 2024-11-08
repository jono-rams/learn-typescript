// arrays

let names: string[] = ['Mario', 'Luigi', 'Peach'];
let ages: number[] = [20, 28, 24];

names.push('Bowser');
ages.push(35);

console.log(names);
console.log(ages);

// type inference with arrays

let fruits = ['apples', 'bananas', 'pears', 'mangoes'];

fruits.push('peaches');

const f = fruits[3];

let things = [1, true, 'hello'];
const t = things[0];

// object literals

let user: { firstName: string, age: number, id: number } = {
    firstName: 'Mario',
    age: 30,
    id: 1
}

user.firstName = 'Peach';
user.id = 2;

// type inference with objects literals

let person = {
    name: 'Luigi',
    score: 35
}

person.name = "Bowser";
person.score = 40;

const score = person.score;