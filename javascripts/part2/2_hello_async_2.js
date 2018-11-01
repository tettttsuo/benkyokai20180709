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
