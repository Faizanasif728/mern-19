// if statement
x = 5;
if (x > 0) {
  console.log("x is greater than 0");
}
// if else statement
x = 5;
message = "x is positive";
if (x > 0) {
  console.log(message);
} else {
  console.log("x is zero or negative");
}
// nested if (true case)
x = 10;
y = 5;
if (x > 5) {
  if (y > 2) {
    console.log("inner condition is true");
  } else {
    console.log("inner else is run");
  }
} else {
  console.log("outer condition is not true");
}

// nested if (false case)
x = 4;
y = 1;
if (x > 5) {
  if (y > 2) {
    console.log("inner condition is true");
  } else {
    console.log("inner else is run");
  }
} else {
  console.log("outer condition is not true");
}
// multiple if statement
let integerr_value = 15;
if (integerr_value > 10) {
  console.log("x is greater than 10");
}
if (integerr_value % 2 == 0) {
  console.log("x is even");
}
if (integerr_value % 3 == 0) {
  console.log("x is odd");
} else {
  console.log("no condition is true");
}

// if else if
value = 20;
if (x > 30) {
  console.log("greater than 30");
} else if (x > 20) {
  console.log("greater than 20");
} else if (x > 10) {
  console.log("greater than 10");
} else {
  console.log("x is 10 or equal to 20");
}
