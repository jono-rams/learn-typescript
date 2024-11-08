// interfaces

interface Author {
  name: string,
  avatar: string
}

const authorOne: Author = {
  name: 'Mario',
  avatar: '/img/mario.png'
}

interface Post {
  title: string,
  body: string,
  tags: string[],
  createdAt: Date,
  author: Author
}

const newPost: Post = {
  title: 'My first post',
  body: 'something interesting',
  tags: ['gaming', 'tech'],
  createdAt: new Date(),
  author: authorOne
}

// as function argument type

function createPost(post: Post): void {
  console.log(`created post: ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// with arrays

let posts: Post[] = [];

posts.push(newPost);

console.log(posts);