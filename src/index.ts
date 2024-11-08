// function signatures

type Calculator = (numOne: number, numTwo: number) => number;

function add(a: number, b: number) {
  return a + b;
}
function multiply(first: number, second: number) {
  return first * second;
}
function square(num: number) {
  return num * num;
}
function joinTwoNumbers(first: number, second: number) {
  return `${first}${second}`;
}

let calcs: Calculator[] = [];

calcs.push(add);
calcs.push(multiply);
calcs.push(square);
// calcs.push(joinTwoNumbers);

// function signatures on interfaces
interface HasArea {
  name: string
  // calcArea: (a: number) => number
  calcArea(a: number): number
}

const shapeOne: HasArea = {
  name: 'square',
  calcArea: (length: number) => length * length
}

const shapeTwo: HasArea = {
  name: 'circle',
  calcArea: (radius: number) => Math.PI * radius^2
}

console.log(shapeOne.calcArea(10));
console.log(shapeTwo.calcArea(10));
