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
