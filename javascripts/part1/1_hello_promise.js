
function helloPromise() {
  // The argument function passed to `new Promise` is called synchronously.
  const promise = new Promise(() => {
    console.log(0);
  });

  const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('fulfilled!');
  });

  const promise2 = new Promise((resolve, reject) => {
    console.log(2);
    reject('rejected!');
  });
  console.log(3);

  console.log('what are the states?');
  console.log('promise', promise);
  console.log('promise1', promise1);
  console.log('promise2', promise2);
}
