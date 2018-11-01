// Call "then" on resolved promise
function thenOnResolvedPromise() {
  const promise = new Promise((resolve) => {
    console.log(0);
    resolve('fulfilled1!');
  });

  const promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'fulfilled2!'
  });

  console.log(1);
  console.log('promise', promise);
  console.log('promise1', promise1);
  console.log('synchronous execution finished here.');

  // Below is called in 1 sec.
  setTimeout(() => {
    console.log('1 sec passed...');
    console.log('promise', promise);
    console.log('promise1', promise1);
  }, 1000);
}
