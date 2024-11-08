// Generic Classes

class DataCollection<T> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const randomIndex = Math.floor(Math.random() * this.data.length);
    return this.data[randomIndex];
  }
  loadAll(): T[] {
    return this.data;
  }
  add(item: T): T[] {
    this.data.push(item);
    return this.data;
  }
}

interface User {
  name: string;
  score: number;
}

const userCollection = new DataCollection<User>([
  { name: "John", score: 100 },
  { name: "Jane", score: 200 },
]);

console.log(userCollection.loadOne());
console.log(userCollection.loadAll());
console.log(userCollection.add({ name: "Jim", score: 300 }));
