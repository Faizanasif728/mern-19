// // function with arguments || Function declaration
function myfunc(p1 = 1, p2 = 6) {
  console.log("p1 >> ", p1);
  console.log("p2 >> ", p2);
}
myfunc();
// ------------------------------------
function myfuncs(p1 = 1, p2 = 2) {
  console.log("p1 >> ", p1);
  console.log("p2 >> ", p2);
  return true;
}
const myvar = myfuncs;
console.log(myvar(11, 5));

// // // function with default parameters
function myfunction(p1 = 3, p2 = 4) {
  console.log("p1 >> ", p1);
  console.log("p2 >> ", p2);
}
myfunction();

// Function expression
const pallindrome = function myfunction(p3, p4) {
  console.log("p3 >> ", p3);
  console.log("p4 >> ", p4);
};
pallindrome(10, 20);
// Arrow function or Anonymous function
const evenodd = (
  p1 = 7,
  p2 = ((params) => {
    console.log("IIFE", params);
    return 1;
  })("param's value")
) => {
  p1 % 2 == 0 ? console.log(`${p1} is even`) : console.log(`${p1} is odd`);
  p2 % 2 == 0 ? console.log(`${p2} is even`) : console.log(`${p2} is odd`);
};
// function call
evenodd(2, 9);

// IIFE FUNCTION

((params) => {
  console.log("IIFE", params);
})("param's value");
