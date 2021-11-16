const fibDynamic = function (n) {
  let fib = new Array(n + 2);
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
};

console.log(fibDynamic(100));
