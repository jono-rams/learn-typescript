// reusable interfaces

interface HasQuantity {
  quantity: number;
}

const something: HasQuantity = {
  quantity: 10
}

function printQuantity(item: HasQuantity): void {
  console.log(`Quantity: ${item.quantity}`);
}

const fruit = {
  name: 'apple',
  quantity: 50
}
const vehicle = {
  type: 'car',
  quantity: 3
}
const person = {
  name: 'mario',
  age: 30
}

printQuantity(fruit);
printQuantity(vehicle);
// printQuantity(person);
// printQuantity({ quantity: 50, title: 'test' });
