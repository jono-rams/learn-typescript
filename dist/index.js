"use strict";
// sets in typescript
const names = new Set();
names.add("Mario");
names.add("Luigi");
names.add("Peach");
names.add("Mario");
console.log(names);
const user1 = {
    email: "mario@gmail.com",
    score: 100,
};
const user2 = {
    email: "luigi@gmail.com",
    score: 90,
};
const users = new Set();
users.add(user1);
users.add(user2);
users.add(user1);
// users.add('hello');
console.log(users);
// sets as function arguments
function logUserEmails(users) {
    users.forEach((user) => console.log(user.email));
}
logUserEmails(users);
// logUserEmails(['jadsij', 'sadash'])
