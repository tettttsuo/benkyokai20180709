// 実際にあった形
// 2まではいかない
function realExample() {
  async function asyncFunc() {
    const promise = new Promise(() => {
      console.log(0);
    });
    await promise.then(() => {
      console.log(1);
    });
    console.log(2);
  }
  asyncFunc();
}
