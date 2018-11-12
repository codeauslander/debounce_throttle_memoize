const wordsToArray = (array) => { 
  console.log(array.split(',').map( item => item.toLowerCase().trim()));
};

const debounce = (fun, delay) => {
  let inDebounce;
  return () => {
    const context = this;
    const args = arguments; 
    clearTimeout(inDebounce);
    inDebounce = setTimeout( () => fun.apply(context, args), delay);
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
  debounce(wordsToArray(userInput), 3000);
});
