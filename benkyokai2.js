function p(callback) {
  clear();
  callback.call();
}

function helloAsync() {
  async function asyncFunc() {
    console.log(1);
  }
  console.log(0);
  const result = asyncFunc();
  console.log(result);
  console.log(0);

  setTimeout(() => {
    console.log('1秒後');
    console.log(result);
  }, 1000);
}
