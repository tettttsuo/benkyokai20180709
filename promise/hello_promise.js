// 初めてのpromise
module.exports = function () {
  let promise = new Promise(() => {
    console.log(0);
  });

  console.log(1);
  console.log('promise', promise);
}
