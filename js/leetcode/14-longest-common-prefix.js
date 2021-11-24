// https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function (strs) {
  let l = [];
  let i = 0;
  let n = Math.min(...strs.map((s) => s.length)); // find length of shortest string

  while (i < n) {
    if (!strs.every((str) => str[i] === strs[0][i])) {
      break;
    }
    // if all equal
    l.push(strs[0][i]);
    i++;
  }

  return l.length > 0 ? l.join('') : '';
};

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
