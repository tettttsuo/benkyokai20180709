function callFunc(callback) {
  clear();
  callback.call();
}

// 初めてのpromise
function helloPromise() {
  let promise = new Promise(() => {
    console.log(0);
  });

  console.log(1);
  console.log('promise', promise);
}

// resolveを呼ぶ
function resolvePromise() {
  let promise = new Promise((resolve) => {
    console.log(0);
    resolve('fulfilled1!');
  });

  let promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'fulfilled2!'
  });

  console.log(1);
  console.log('promise', promise);
  console.log('promise1', promise1);
  console.log(1);

  setTimeout(() => {
    console.log('1秒後');
    console.log('promise', promise);
    console.log('promise1', promise1);
  }, 1000);
}

// rejectを呼ぶ
function rejectedPromise() {
  let promise = new Promise((resolve, reject) => {
    console.log(0);
    reject('rejected!');
  });

  let promise1 = promise.catch((message) => {
    console.log(message);
    console.log(2);
    return 'fulfilled2!';
  });

  console.log(1);
  console.log('promise', promise);
  console.log('promise1', promise1);
  console.log(1);

  setTimeout(() => {
    console.log('1秒後');
    console.log('promise', promise);
    console.log('promise1', promise1);
  }, 1000);
}

// thenチェーンの途中でrejectされる
function rejectedDuringChain1() {
  let promise = new Promise((resolve, reject) => {
    console.log(0);
    resolve('fulfilled1!');
  });

  let promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'fulfilled2!';
  });

  let promise2 = promise1.then((message) => {
    console.log(3);
    console.log(message);
    return 'fulfilled2!';
  });

  let promise3 = promise2.then((message) => {
    console.log(4);
    console.log(message);
    throw new Error('reject1!');
  });

  let promise4 = promise3.catch((err) => {
    console.log(5);
    console.log(err.message);
    return 'fulfilled3!';
  });

  let promise5 = promise4.then((message) => {
    console.log(6);
    console.log(message);
    return 'fulfilled4!';
  });

  console.log(1);
  console.log('promise', promise)
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log('promise3', promise3);
  console.log('promise4', promise4);
  console.log('promise5', promise5);
  console.log(1);

  setTimeout(() => {
    console.log('1秒後');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
    console.log('promise3', promise3);
    console.log('promise4', promise4);
    console.log('promise5', promise5);
  }, 1000);
}


function rejectedDuringChain2() {
  let promise = new Promise((resolve, reject) => {
    console.log(0);
    reject('rejected!');
  });

  let promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'ここは飛ばされる';
  });

  let promise2 = promise1.catch((message) => {
    console.log(3);
    console.log(message);
    return 'fulfilled2!';
  });


  console.log(1);
  console.log('promise', promise)
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log(1);

  setTimeout(() => {
    console.log('1秒後');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
  }, 1000);
}

// pendingだと進まない
function pendingForever() {
  let promise = new Promise((resolve, reject) => {
    console.log(0);
  });

  let promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'fulfilled2!';
  });

  let promise2 = promise.then((message) => {
    console.log(3);
    console.log(message);
    return 'fulfilled3!';
  });

  console.log(1);
  console.log('promise', promise)
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log(1);

  setTimeout(() => {
    console.log('1秒後');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
  }, 1000);
}

// 非同期にresolve
function resolveAysnc() {
  let promise = new Promise((resolve, reject) => {
    console.log(0);
    setTimeout(() => {
      console.log('1秒後');
      resolve('fulfilled!');
    }, 1000);
  });

  let promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'fulfilled2!';
  });

  let promise2 = promise.then((message) => {
    console.log(3);
    console.log(message);
    return 'fulfilled3!';
  });

  console.log(1);
  console.log('promise', promise)
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log(1);

  setTimeout(() => {
    console.log('2秒後');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
  }, 2000);
}

// catchされないとrejectedなpromiseは例外を発生する
function nonHandledReject() {
  let promise = new Promise((resolve, reject) => {
    reject('エラー');
  });
}

// thenの枝分かれ
function forkThen() {
  let promise = new Promise((resolve, reject) => {
    console.log(0);
    resolve('fulfilled!');
  });

  let promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    return 'fulfilled2!';
  });

  let promise1 = promise.then((message) => {
    console.log(3);
    console.log(message);
    return 'fulfilled3!';
  });

  console.log(1);
  console.log('promise', promise)
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log(1);

  setTimeout(() => {
    console.log('1秒後');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
  }, 1000);
}

// thenの引数関数がいつまでもpendingなpromiseを返す
function returnPendingPromiseFromThenArg() {
  let promise = new Promise((resolve, reject) => {
    console.log(0);
    resolve('fulfilled!');
  });

  let promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    new Promise(() => {
      console.log(3);
    });
    return 
  });

  let promise2 = promise1.then((message) => {
    console.log(4);
    console.log(message);
    return 'fulfilled3!';
  });

  console.log(1);
  console.log('promise', promise)
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log(1);

  setTimeout(() => {
    console.log('1秒後');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
  }, 1000);
}

// thenの引数関数がfulfilledなpromiseを返す
function returnFulfilledPromiseFromThenArg() {
  let anotherPromise;
  let promise = new Promise((resolve, reject) => {
    console.log(0);
    resolve('fulfilled!');
  });

  let promise1 = promise.then((message) => {
    console.log(2);
    console.log(message);
    anotherPromise = new Promise((resolve) => {
      console.log(3);
      resolve('fulfilled from then new promise!');
    });
    return anotherPromise;
  });

  let promise2 = promise1.then((message) => {
    console.log(4);
    console.log(message);
    return 'fulfilled3!';
  });

  console.log(1);
  console.log('promise', promise)
  console.log('promise1', promise1);
  console.log('promise2', promise2);
  console.log('anotherPromise', anotherPromise);
  console.log(1);

  setTimeout(() => {
    console.log('1秒後');
    console.log('promise', promise)
    console.log('promise1', promise1);
    console.log('promise2', promise2);
    console.log('anotherPromise', anotherPromise);
    console.log('promise1 === anotherPromise', promise1 === anotherPromise);
  }, 1000);
}
