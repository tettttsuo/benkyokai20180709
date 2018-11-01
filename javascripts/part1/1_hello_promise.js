// Introduction to Promise
// Promise and promise(the instance of Promise constructor) are invented to resolve a problem known as `callback hell`, which is deep nesting on Javascript code.
// This repository is created for presentational purpose to those who are not familiar with promise.
// Copy and paste the function definition snippets on Chrome console and call them. Can you explain why the logs are what they are? If you can, you're on the right course.
// 
// Promise Basics
// 
// promise has three states. The initial is `pending`, the others are `resolved` and `rejected`.
// Once the state is changed to `resolved` or `rejected`, they will never change to another state.
function helloPromise() {
  // The argument function passed to `new Promise` is called synchronously.
  const promise = new Promise(() => {
    console.log(0);
  });

  const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('fulfilled!');
  });

  const promise2 = new Promise((resolve, reject) => {
    console.log(2);
    reject('rejected!');
  });
  console.log(3);

  console.log('what are the states?');
  console.log('promise', promise);
  console.log('promise1', promise1);
  console.log('promise2', promise2);
}
