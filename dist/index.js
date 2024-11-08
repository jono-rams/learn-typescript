"use strict";
// reusable interfaces
const something = {
    quantity: 10
};
function printQuantity(item) {
    console.log(`Quantity: ${item.quantity}`);
}
const fruit = {
    name: 'apple',
    quantity: 50
};
const vehicle = {
    type: 'car',
    quantity: 3
};
const person = {
    name: 'mario',
    age: 30
};
printQuantity(fruit);
printQuantity(vehicle);
// printQuantity(person);
// printQuantity({ quantity: 50, title: 'test' });
