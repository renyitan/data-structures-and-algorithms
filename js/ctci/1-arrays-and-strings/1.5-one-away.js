function oneAway(inputStr, outputStr) {
  const hash = {};
  const str1 = inputStr.split('');
  const str2 = outputStr.split('');
  for (let i = 0; i < str1.length; i++) {
    hash[str1[i]] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]] === 1) {
      delete hash[str2[i]];
    }
  }

  return Object.keys(hash).length === 1;
}

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('bale', 'pale')); // true
console.log(oneAway('pale', 'bake')); // true