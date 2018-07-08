//logger
function logOnPromiseThen() {
  const original = Promise.prototype.then;
  Promise.prototype.then = function(){
    console.log('called!');
    original.apply(this, arguments);
  }
}

// hello async
function helloAsync1() {
  async function func() {
    console.log(1);
    return 'fulfilled!';
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

// hello async
// async = return new Promise && resolve
function helloAsync2() {
  function func() {
    return new Promise((resolve) => {
      console.log(1);
      resolve('fulfilled!');
    });
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

// promiseを返すasync
function aysncReturnsPromise1() {
  let anotherPromise;
  async function func() {
    anotherPromise = new Promise((resolve) => {
      console.log(1);
      resolve('fulfilled1!');
    });

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


// asyncの中でエラー発生
function errorFromAsync1() {
  async function func() {
    console.log(1);
    throw new Error('errror');
  }
  console.log(0);
  const promise = func();
  console.log(promise);
  console.log(2);
}

// asyncの中でエラー発生
function errorFromAsync2() {
  function func() {
    return new Promise((resolve, reject) => {
      console.log(1);
      reject('error');
    });
  }
  console.log(0);
  const promise = func();
  console.log(promise);
  console.log(2);
}

// hello await
function helloAwait1() {
  async function func() {
    console.log(1);
    const ten = await 10;
    console.log(ten);
    return undefined;
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

// hello await
function helloAwait2() {
  function func() {
    return new Promise((resolve, reject) => {
      console.log(1);
      resolve(10);
    }).then((ten) => {
      console.log(ten);
    });
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

// return promise from await
function returnPromiseFromAwait1() {
  async function func() {
    console.log(1);
    const ten = await 10;
    console.log(ten);
    return undefined;
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

// return promise from await
function returnPromiseFromAwait2() {
  let anotherPromise;
  function func() {
    anotherPromise = new Promise((resolve, reject) => {
      console.log(1);
      resolve(10);
    }).then((ten) => {
      console.log(ten);
      return undefined;
    });
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

// await returns promise
function awaitReturnsPromise2() {
  let anotherPromise;
  function func() {
    anotherPromise = new Promise((resolve, reject) => {
      console.log(1);
      resolve('fulfilled1!');
    }).then((result) => {
      console.log(result);
    });
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

// multiple awaits
function multipleAwaits1() {
  async function func() {
    console.log(1);
    const ten = await 10;
    console.log(ten);
    const twenty = await 20;
    console.log(ten + twenty);
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

// multiple awaits
function multipleAwaits2() {
  let anotherPromise;
  function func() {
    return new Promise((resolve, reject) => {
      console.log(1);
      resolve(10);
    })
    .then((ten) => {
      console.log(ten);
      Promise.resolve(20).then((twenty) => {
        console.log(ten + twenty);
      });
    })
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
