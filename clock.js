//  Assigning arrow function to constant variable named as "mypromise"
const mypromise = () => {
  // inside arrow function there is promise that respond time of 1 sec interval
  return new Promise((res) => {
    setTimeout(() => {
      res(new Date());
    }, 1000);
  });
};
// Asynchronous Function named as "main"
const main = async () => {
  // For loop for infinite iterations
  for (let i = 0; ; i++) {
    try {
      // calling mypromise function
      await mypromise().then((res) => {
        console.log(res);
      });
      // If there is any error
    } catch (error) {
      console.log(error);
    }
  }
};
// calling main function
main();
