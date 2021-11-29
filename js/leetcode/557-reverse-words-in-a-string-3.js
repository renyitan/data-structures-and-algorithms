// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.split(' ')
  let output = []
  for (let i = 0; i < str.length; i++) {
    let substr = str[i];
    substr = substr.split('').reverse().join('')
    output[i] = substr
  }
  return output.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"