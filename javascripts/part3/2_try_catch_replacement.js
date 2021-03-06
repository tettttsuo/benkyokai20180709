// try/catchの代わりにpromiseを使う1
function malFunc() {
  throw new Error('err!');
}

function tryCatchReplacement1() {
  try {
    malFunc();
  } catch(err) {
    console.log(err.message)
  }
}

// try/catchの代わりにpromiseを使う2
function tryCatchReplacement2() {
  new Promise(malFunc).catch((err) => {
    console.log(err.message)
  });
}

// try/catchの代わりにpromiseを使う3
function tryCatchReplacement3() {
  (async function() {
    malFunc();
  })().catch((err) => {
    console.log(err.message)
  });
}
