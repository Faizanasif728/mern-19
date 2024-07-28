const mypromise = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(new Date());
    }, 1000);
  });
};
const main = async () => {
  for (let i = 0; ; i++) {
    try {
      await mypromise().then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  }
};
main();
