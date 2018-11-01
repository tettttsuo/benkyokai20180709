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
