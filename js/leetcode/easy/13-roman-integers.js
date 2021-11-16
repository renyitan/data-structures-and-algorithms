// https://leetcode.com/problems/roman-to-integer/

const SYMBOL = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let sum = 0;
  let n = s.length - 1;

  while (n >= 0) {
    if (s[n + 1]) {
      if (s[n] === 'I') {
        if (s[n + 1] === 'V' || s[n + 1] === 'X') {
          sum -= 2;
        }
      }
      if (s[n] === 'X') {
        if (s[n + 1] === 'L' || s[n + 1] === 'C') {
          sum -= 20;
        }
      }
      if (s[n] === 'C') {
        if (s[n + 1] === 'D' || s[n + 1] === 'M') {
          sum -= 200;
        }
      }
    }
    sum += SYMBOL[s[n]];
    n--;
  }
  return sum;
};

console.log(romanToInt('MCMXCIV'));
