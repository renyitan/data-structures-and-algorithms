function fibonacci(n) {
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;

  // memoization
  for (i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[n];
}

console.log(fibonacci(10));
