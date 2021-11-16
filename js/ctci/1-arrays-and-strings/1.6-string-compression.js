function stringCompression(s) {
  const str = s.split('');

  const output = [];
  let currentChar = s[0];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
      continue;
    } else {
      output.push(currentChar);
      output.push(count);
      currentChar = str[i];
      count = 1;
    }
  }
  // add last characters
  output.push(currentChar);
  output.push(count);

  return output.join('');
}

console.log(stringCompression('aabcccccaaa')); // a2b1c5a3
