function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Returning cached result');
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Example of an expensive function
function slowFunction(num) {
  for (let i = 0; i < 1e9; i++) {} // Simulating a slow operation
  return num * 2;
}

// Memoized version of the slow function
const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Slow calculation
console.log(memoizedSlowFunction(5)); // Returning cached result
console.log(memoizedSlowFunction(10)); // Slow calculation
console.log(memoizedSlowFunction(10)); // Returning cached result
