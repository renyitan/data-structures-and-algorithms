function tripleSteps(n) {
  let f = [];
  f[0] = 1; // unclear why there is "1 way of not ascending the stairs"
  f[1] = 1;
  f[2] = 2;

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2] + f[i - 3];
  }

  return f[n]
}

console.log(tripleSteps(3));
