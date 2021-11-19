//https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] + 1 || 1;
  }
  for (let j = 0; j < t.length; j++) {
    hash[t[j]] = hash[t[j]] - 1;
    if (hash[t[j]] <= 0) delete hash[t[j]];
  }

  // if empty object, it is an anagram since you'd remove all elements
  return Object.keys(hash).length === 0;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
