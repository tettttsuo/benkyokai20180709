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
