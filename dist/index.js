"use strict";
// Generic Classes
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const randomIndex = Math.floor(Math.random() * this.data.length);
        return this.data[randomIndex];
    }
    loadAll() {
        return this.data;
    }
    add(item) {
        this.data.push(item);
        return this.data;
    }
}
const userCollection = new DataCollection([
    { name: "John", score: 100 },
    { name: "Jane", score: 200 },
]);
console.log(userCollection.loadOne());
console.log(userCollection.loadAll());
console.log(userCollection.add({ name: "Jim", score: 300 }));
