"use strict";
// Generic Constraints
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
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const userCollection = new DataCollection([
    { name: "John", score: 100, id: 1 },
    { name: "Jane", score: 200, id: 2 },
]);
console.log(userCollection.loadOne());
console.log(userCollection.loadAll());
console.log(userCollection.add({ name: "Jim", score: 300, id: 3 }));
userCollection.deleteOne(2);
console.log(userCollection.loadAll());
