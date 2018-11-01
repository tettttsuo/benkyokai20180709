// thenの引数関数がfulfilledなpromiseを返す
function returnFulfilledPromiseFromThenArg() {
  const anotherPromise;
  const promise = new Promise((resolve, reject) => {
    console.log(0);
    resolve('fulfilled!');
  });

  const promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    anotherPromise = new Promise((resolve) => {
      console.log(3);
      resolve('fulfilled from then new promise!');
    });
    return anotherPromise;
  });

  const promise2 = promise1.then((message) => {
    console.log(4);
    console.log(message);
    return 'fulfilled3!';
  });

  console.log(1);
  console.log('promise', promise)
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log('anotherPromise', anotherPromise);
  console.log('同期的実行終了');

  setTimeout(() => {
    console.log('1 sec passed...');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
    console.log('anotherPromise', anotherPromise);
    console.log('promise1 === anotherPromise', promise1 === anotherPromise);
  }, 1000);
}
