
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


