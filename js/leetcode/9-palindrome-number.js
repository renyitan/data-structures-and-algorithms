// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const s = String(x).split('');
  let i = 0,
    j = s.length - 1;

  if (s.length === 1) {
    return true;
  }

  if (s.length === 2) {
    return s[0] === s[1];
  }

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }

    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome(101));
console.log(isPalindrome(100));
console.log(isPalindrome(1001));
