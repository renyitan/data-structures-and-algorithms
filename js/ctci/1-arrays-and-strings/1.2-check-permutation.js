function checkPermutation(s1, s2) {
  if (s1.length !== s2.length) return false;
  let hash = {};
  for (let i = 0; i < s1.length; i++) {
    hash[s1[i]] = 1;
  }
  for (let i = 0; i < s2.length; i++) {
    if (hash[s2[i]]) {
      delete hash[s2[i]];
      continue;
    } else {
      return false;
    }
  }
  return Object.keys(hash).length === 0;
}

// sort and check if they are the same
function checkPermutation1(s1, s2) {
  if (s1.length !== s2.length) return false;
  const str1 = s1.split('').sort();
  const str2 = s2.split('').sort();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation('str', 'rts')); // true
console.log(checkPermutation1('str', 'rts')); // true
