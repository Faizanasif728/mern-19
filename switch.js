let option = 4;
switch (option) {
  case 1:
    console.log("morning");
    break;
  case 2:
    console.log("evening");
    break;
  case 3:
    console.log("night");
    break;
  case 4:
    console.log("midnight");
    break;
  case 5:
    console.log("early day");
    break;
  default:
    console.log("good luck");
}

// ternary operator
const myage = 22;

const result = myage > 25 ? "Adult" : "young";

console.log(result);

// Short Circuiting
// a = 10;
// b = 12;
// if (a > 0 && b > 0) {
//   console.log("both greater");
// } else {
//   console.log("one is greater");
// }

// a = 10;
// b = 12;
// if (a > 0 || b > 0) {
//   console.log("both greater");
// } else {
//   console.log("one is greater");
// }
