const wordsToArray = (words) => {
  console.log(words.split(',').map( item => item.toLowerCase().trim()));
};

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return () => {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

const userInput = 'deBounce, Throttle,  MemoizE ';

const times = x => f => {
  if (x > 0) {
    f();
    times(x - 1)(f);
  }
};

times(500)(() => {
  // console.log(Date.now());
  throttle(wordsToArray(userInput), 3000) ;
});



