// await returns promise
function awaitReturnsPromise1() {
  async function func() {
    console.log(1);
    const result = await new Promise((resolve) => {
      resolve('fulfilled1!');
    });
    console.log(result);
  }
  console.log(0);
  const promise = func();
  console.log(promise);
  console.log(2);

  setTimeout(() => {
    console.log('1 sec passed...');
    console.log('promise', promise);
  }, 1000);
}
