// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const PAD = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};
var letterCombinations = function (digits) {
  let results = [];
  const nums = digits.split('');
  // case 1: no digits
  if (digits.length === 0) {
    return '';
  }
  // case 2: 1 digit
  if (digits.length === 1) {
    return PAD[digits[0]];
  }

  function backtrack(i, currentStr) {
    if (currentStr.length === digits.length) {
      result.push(currentStr);
      return;
    }
    PAD[nums[i]].forEach((letter) => backtrack(i + 1, currentStr + letter));
  }

  backtrack(0, '');
  return results;
};

console.log(letterCombinations('234'));
