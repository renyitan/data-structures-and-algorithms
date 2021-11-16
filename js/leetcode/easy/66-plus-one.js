// https://leetcode.com/problems/plus-one/
var plusOne = function (digits) {
  let carry = 1;
  n = digits.length - 1;

  while (n >= 0) {
    const val = digits[n] + carry;
    digits.splice(n, 1, val % 10);
    carry = Math.floor(val / 10);
    n--;
  }

  if (carry) {
    digits.splice(0, 0, carry);
  }
  return digits
};
console.log(plusOne([9]));
console.log(plusOne([1, 2, 4]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
