// Generic Constraints

interface HasID {
  id: number;
}

class DataCollection<T extends HasID> {
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
  deleteOne(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}

interface User extends HasID {
  name: string;
  score: number;
}

const userCollection = new DataCollection<User>([
  { name: "John", score: 100, id: 1 },
  { name: "Jane", score: 200, id: 2 },
]);

console.log(userCollection.loadOne());
console.log(userCollection.loadAll());
console.log(userCollection.add({ name: "Jim", score: 300, id: 3 }));
userCollection.deleteOne(2);
console.log(userCollection.loadAll());
