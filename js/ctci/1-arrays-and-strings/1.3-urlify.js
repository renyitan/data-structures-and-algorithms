function URLify(s) {
  const str = s.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str.splice(i, 1, '%');
      str.splice(i + 1, 0, '20');
    }
  }
  console.log(str.join(''));
}

console.log(URLify('Mr John Smith'));
