// Generics

function logAndReturnValue<T>(arg: T): T {
  console.log(arg);
  return arg;
}

logAndReturnValue<string>("Hello, world!");
logAndReturnValue<number>(123);

function getRandomArrayElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface User {
  name: string;
  score: number;
}

const users: User[] = [
  { name: "John", score: 100 },
  { name: "Jane", score: 95 },
  { name: "Jim", score: 90 },
  { name: "Jill", score: 85 },
];

const randomUser = getRandomArrayElement(users);
console.log(randomUser.score);
