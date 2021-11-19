let permutate = (str) => {
  let results = [];

  // base case
  if (str.length < 2) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.substring(0, i) + str.substring(i + 1, str.length);

    let perms = permutate(remaining);
    

    for (let perm of perms) {
      results.push(perm + char);
    }
  }
  return results;
};

// console.log(permutate('stu'));
console.log(permutate('stu'));
