// Generic Interfaces

interface Collection<T> {
  data: T[];
  name: string;
}

const collectionOne: Collection<string> = {
  data: ["a", "b", "c"],
  name: "string collection",
};

const collectionTwo: Collection<number> = {
  data: [1, 2, 3],
  name: "number collection",
};

function randomCollectionItem<T>(c: Collection<T>): T {
  const randomIndex = Math.floor(Math.random() * c.data.length);
  return c.data[randomIndex];
}

const resultOne = randomCollectionItem<string>(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo);

console.log(resultOne, resultTwo);
