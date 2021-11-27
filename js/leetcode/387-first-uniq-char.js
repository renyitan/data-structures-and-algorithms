// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], true); // there is duplicate
    } else {
      map.set(s[i], false);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === false) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1`
