// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length === 1) return s.length;
  const strip = s.split(' ');
  const words = strip.filter((s) => {
    if (s !== '' || s !== ' ') {
      return s;
    }
  });
  const lastWord = words[words.length - 1];

  return lastWord.length;
};

// alternate solution
const lengthOfLastWordBetter = function (s) {
  return s.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord('Hello  World '));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWordBetter('luffy is still joyboy'));
