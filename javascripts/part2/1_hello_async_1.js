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
