
const add = (n) => (n + 10);

const factorial = (x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  
    if (n in cache) {
      console.log('\n From cache for ',n,' result:',cache[n]);
      return cache[n];
    } else {
      cache[n] = fn(n);
      console.log('\n Calculated result for ',n,' result:',cache[n]);
      return cache[n];
    }
  };
};

const memoizedAdd = memoize(add);
console.log('\n--Simple memoize--');
memoizedAdd(3);  
memoizedAdd(3);  
memoizedAdd(4);  
memoizedAdd(4);  


const memoizeFactorial = memoize(
  (x) => {
    if (x === 0) {
      return 1;
    }
    else {
      return x * memoizeFactorial(x - 1);
    }
  }
);
console.log('\n--Recursive memoize--');
 
memoizeFactorial(6); 
memoizeFactorial(5);
memoizeFactorial(4);

