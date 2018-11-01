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
