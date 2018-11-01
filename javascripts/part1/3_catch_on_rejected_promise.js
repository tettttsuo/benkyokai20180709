// rejectを呼ぶ
function catchOnRejectedPromise() {
  const promise = new Promise((resolve, reject) => {
    console.log(0);
    reject('rejected!');
  });

  const promise1 = promise.catch((message) => {
    console.log(message);
    console.log(2);
    return 'fulfilled2!';
  });

  console.log(1);
  console.log('promise', promise);
  console.log('promise1', promise1);
  console.log('同期実行終了');

  setTimeout(() => {
    console.log('1 sec passed...');
    console.log('promise', promise);
    console.log('promise1', promise1);
  }, 1000);
}
