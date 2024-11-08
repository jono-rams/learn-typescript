"use strict";
// Generic Interfaces
const collectionOne = {
    data: ["a", "b", "c"],
    name: "string collection",
};
const collectionTwo = {
    data: [1, 2, 3],
    name: "number collection",
};
function randomCollectionItem(c) {
    const randomIndex = Math.floor(Math.random() * c.data.length);
    return c.data[randomIndex];
}
const resultOne = randomCollectionItem(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo);
console.log(resultOne, resultTwo);
