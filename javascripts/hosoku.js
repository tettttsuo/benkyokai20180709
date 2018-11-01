function helloAwait3() {
  async function func() {
    console.log(0);
    const seven = await new Promise((resolve) => {
      setTimeout(() => {
        console.log('1 sec passed...')
        console.log(2);
        resolve(7);
      }, 1000);
    })

    const ten = await new Promise((resolve) => {
      setTimeout(() => {
        console.log('1 more sec passed...')
        console.log(3);
        resolve(10);
      }, 1000);
    })

    console.log(seven * ten);
  }
  func();
  console.log(1);
}

function rejectedPromiseFromThenArg() {
  Promise.resolve().then(()=>{
    return Promise.reject(3);
  })
  .catch(err => console.log(err)) 
}

let anotherPromise;
let promise;
function rejectedPromiseFromThenArg2() {
  promise = Promise.resolve().then(() => {
    anotherPromise = new Promise((r) => {
      setTimeout(() => {
        console.log('10 sec')
        r('fulfilled');
      }, 10000);
    });
    return anotherPromise;
  })
}


