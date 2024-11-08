// sets in typescript

const names = new Set<string>();

names.add("Mario");
names.add("Luigi");
names.add("Peach");
names.add("Mario");

console.log(names);

// sets with custom types

interface User {
  email: string;
  score: number;
}

const user1: User = {
  email: "mario@gmail.com",
  score: 100,
};

const user2: User = {
  email: "luigi@gmail.com",
  score: 90,
};

const users = new Set<User>();

users.add(user1);
users.add(user2);
users.add(user1);
// users.add('hello');

console.log(users);

// sets as function arguments

function logUserEmails(users: Set<User>) {
  users.forEach((user) => console.log(user.email));
}

logUserEmails(users);
// logUserEmails(['jadsij', 'sadash'])
