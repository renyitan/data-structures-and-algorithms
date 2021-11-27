// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let hash = {};
  for (let i = 0; i < magazine.length; i++) {
    hash[magazine[i]] = hash[magazine[i]] + 1 || 1;
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (hash[ransomNote[j]]) {
      hash[ransomNote[j]] = hash[ransomNote[j]] - 1;
      if (hash[ransomNote[j]] === 0) {
        delete hash[ransomNote[j]];
      }
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
