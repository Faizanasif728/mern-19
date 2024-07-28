const arrow = () => {
  return true;
};
const array = [1, "one", true, null, undefined, [1, 2], { age: 20 }, arrow];
console.log("all printed", array);
console.log("gives return type", array[7]());
console.log("Age: ", [6].age);
console.log("internal array", [5], [0]);
// push
console.log(array.push("newValue"));
console.log(array);
// pop
array.pop();
console.log(array);
// unshift
array.unshift("newvalue");
console.log(array);
// shift
array.shift();
console.log(array);
// includes
console.log(array.includes("one"));
// indexof
console.log(array.indexOf("one"));
// ternary
array[array.indexOf("one") > -1 ? array.indexOf("one") : array.length] = 1;
console.log(array);
