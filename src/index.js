export const fib = () => {
  const memo = {};
  const fibInner = function (n) {
      if (n in memo) return memo[n];
      if (n <= 1) return n;
      const result = fibInner(n - 1) + fibInner(n - 2); 
      memo[n] = result;
      return result
  };
  return fibInner;
};