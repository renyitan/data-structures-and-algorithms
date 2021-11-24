// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
  if (typeof s !== 'string') return 0;
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  const lengths = [];

  for (let i = 0; i < s.length; i++) {
    let length = 0;
    let hash = {};
    for (let j = i; j < s.length; j++) {
      // encoutering the character the first time
      if (hash[s[j]] === undefined) {
        hash[s[j]] = 1;
        length += 1;
      }
      // if seen before
      else {
        break;
      }
    }
    lengths.push(length);
  }
  console.log(lengths);
  return Math.max(...lengths);
};

console.log(lengthOfLongestSubstring('au'));
