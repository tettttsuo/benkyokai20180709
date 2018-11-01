function rejectedDuringChain2() {
  const promise = new Promise((resolve, reject) => {
    console.log(0);
    reject('rejected!');
  });

  const promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'ここは飛ばされる';
  });

  const promise2 = promise1.catch((message) => {
    console.log(3);
    console.log(message);
    return 'fulfilled2!';
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
  }, 1000);
}
