// thenの引数関数がいつまでもpendingなpromiseを返す
function returnPendingPromiseFromThenArg() {
  const anotherPromise;
  const promise = new Promise((resolve, reject) => {
    console.log(0);
    resolve('fulfilled!');
  });

  const promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    anotherPromise = new Promise(() => {
      console.log(3);
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
  console.log('同期的実行終了');

  setTimeout(() => {
    console.log('1 sec passed...');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
    console.log('promise1 === anotherPromise', promise1 === anotherPromise);
  }, 1000);
}
