// extending type aliases

type Person = {
  id: number | string
  firstName: string
}

type User = Person & {
  email: string
}

const personOne = {
  id: 1,
  firstName: 'mario'
}
const personTwo = {
  id: 2,
  firstName: 'luigi',
  email: 'luigi@gmail.com'
}
const personThree = {
  email: 'peach@gmail.com'
}

function printUser(user: User) {
  console.log(user.id, user.email, user.firstName);
}

// printUser(personOne);
printUser(personTwo);
// printUser(personThree);
