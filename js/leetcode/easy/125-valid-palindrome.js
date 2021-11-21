// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome('aA'));
