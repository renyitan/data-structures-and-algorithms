// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let map = new Map();
  let start = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) >= start) start = map.get(s[i]) + 1;
    map.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
};
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
// console.log(lengthOfLongestSubstring('')); // 0
