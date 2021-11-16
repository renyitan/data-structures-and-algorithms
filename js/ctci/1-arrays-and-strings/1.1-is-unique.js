// Time: )(n)
function isUnique(s) {
  const set = new Set();
  const str = s.split('');
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return false;
    }
    set.add(str[i]);
  }
  return true;
}

// without additional data structure
// time:
function isUniqueNoDataStructure(s) {
  const str = s.split('').sort();
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isUnique('sdeft')); // true
console.log(isUnique('sssss')); // false

console.log(isUniqueNoDataStructure('sdeft'));
console.log(isUniqueNoDataStructure('sssss')); // false
