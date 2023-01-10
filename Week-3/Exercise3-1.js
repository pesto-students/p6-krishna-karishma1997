const memoized = () => {
    let cache = {};
      return (n) => {
          if (n in cache) {
              console.log('Fetching from cache');
              return cache[n];
          }
          else {
              console.log('memorized from result');
              let result = n;
              cache[n] = result;
              return result;
          }
      }
  }
  
  // returned function from memoized
  const MemorizedFn = memoized();
  console.log(MemorizedFn(9));	// memorized
  console.log(MemorizedFn(9));	// cached