// union types

let someId: number | string;

someId = '123';
someId = 123;

console.log(someId);

let email: string | null = null;

email = 'mario@gmail.com';
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = 'hfe7few7322h73f9';
anotherId = 5;

// union types pitfall
function swapIdType(id: Id): Id {
  // can only use props and methods common to
  // both number and string types
  // parseInt(id) --> not allowed

  return id;
}

swapIdType('5');
