// https://leetcode.com/problems/climbing-stairs/

var climbStairsRecursive = function (n) {
  if (n == 0 || n == 1 || n == 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

var climbStairsDynamicBottomUp = function (n) {
  if (n == 1 || n == 2 || n == 0) return n;
  let first = 1;
  let second = 2;

  for (let i = 0; i < n - 2; i++) {
    temp = first;
    first = second;
    second = second + temp;
  }
  return second;
};

var climbStairsDynamicTopDown = function (n) {
  if (n == 0) return n;
  let f = [];
  f[0] = 0;
  f[1] = 1;
  f[2] = 2;

  // memoized all the values
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
};

console.log(climbStairsDynamicBottomUp(10));
console.log(climbStairsDynamicTopDown(10));
