/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] + 1 || 1;
  }
  for (let j = 0; j < t.length; j++) {
    hash[t[j]] = hash[t[j]] - 1;
    if (hash[t[j]] === 0) delete hash[t[j]];
  }
  return Object.keys(hash).length === 0;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'cat')); // false
