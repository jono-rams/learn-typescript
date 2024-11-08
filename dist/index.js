"use strict";
// interfaces
const authorOne = {
    name: 'Mario',
    avatar: '/img/mario.png'
};
const newPost = {
    title: 'My first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    createdAt: new Date(),
    author: authorOne
};
// as function argument type
function createPost(post) {
    console.log(`created post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);
console.log(posts);
