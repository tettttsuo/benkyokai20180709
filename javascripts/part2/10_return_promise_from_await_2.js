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
