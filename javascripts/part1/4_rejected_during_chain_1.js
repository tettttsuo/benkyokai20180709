// thenチェーンの途中でrejectされる
function rejectedDuringChain1() {
  const promise = new Promise((resolve, reject) => {
    console.log(0);
    resolve('fulfilled1!');
  });

  const promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'fulfilled2!';
  });

  const promise2 = promise1.then((message) => {
    console.log(3);
    console.log(message);
    return 'fulfilled3!';
  });

  const promise3 = promise2.then((message) => {
    console.log(4);
    console.log(message);
    throw new Error('reject1!');
  });

  const promise4 = promise3.catch((err) => {
    console.log(5);
    console.log(err.message);
    return 'fulfilled4!';
  });

  const promise5 = promise4.then((message) => {
    console.log(6);
    console.log(message);
    return 'fulfilled5!';
  });

  console.log(1);
  console.log('promise', promise);
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log('promise3', promise3);
  console.log('promise4', promise4);
  console.log('promise5', promise5);
  console.log('同期的実行終了');

  setTimeout(() => {
    console.log('1 sec passed...');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
    console.log('promise3', promise3);
    console.log('promise4', promise4);
    console.log('promise5', promise5);
  }, 1000);
}
