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
