/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let chars = s.replace(/[\W_]+/g, "").toLowerCase().split('');
  let left = 0; right = chars.length - 1;
  while (left <= right) {
    if (chars[left] != chars[right]) {
      return false;
    }
    else {
      left++;
      right--;
    }
  }
  return true;
};