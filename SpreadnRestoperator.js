// spread and rest operator || shallow and deep copy
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const [a, b, ...c] = array;

console.log("a", a);
console.log("b", b);
console.log("c", c);

const person = {
  id: "1234",
  name: "faizan",
  age: 20,
  dob: 2004,
};

const { id, ...user } = person;
console.log(id);
console.log(user);

// function

const check = ({ id, ...user }, array) => {
  console.log(id);
  console.log(user);
  console.log(array);
};

check(person, array);

// // spread

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const tempArray = array1;

// tempArray[0] = "check value";

// console.log(array1);
// console.log(tempArray);

// const main = (a, b, c) => {
//     console.log(a, b, c);
// };

// promises
