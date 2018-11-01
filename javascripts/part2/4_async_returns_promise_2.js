// promiseを返すasync
function aysncReturnsPromise2() {
  let anotherPromise;
  function func() {
    anotherPromise = new Promise((resolve) => {
      console.log(1);
      resolve('fulfilled1!');
    })
    .then((res) => {return res});
    return anotherPromise;
  }
  console.log(0);
  const promise = func();
  console.log(promise);
  console.log(2);

  setTimeout(() => {
    console.log('1 sec passed...');
    console.log('promise', promise);
    console.log('promise === anotherPromise', promise === anotherPromise);
  }, 1000);
}
