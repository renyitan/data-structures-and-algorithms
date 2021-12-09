// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  const str = s.split('');
  const stack = [];

  if (str.length < 2) return false;

  for (let i = 0; i < str.length; i++) {
    // open brace, push to stack
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    }
    // closed brace, check with stack
    if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      const stackPop = stack.pop();

      if (str[i] === ')' && stackPop !== '(') {
        return false;
      }
      if (str[i] === ']' && stackPop !== '[') {
        return false;
      }
      if (str[i] === '}' && stackPop !== '{') {
        return false;
      }
    }
  }

  return stack.length === 0;
};

var isValid2 = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    }
    else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      // gotta check
      let parenthesis = stack.pop();
      if (s[i] === ')' && parenthesis !== '(') {
        return false;
      }
      if (s[i] === ']' && parenthesis !== '[') {
        return false;
      }
      if (s[i] === '}' && parenthesis !== '{') {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isValid('(('));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('([)]'));
// console.log(isValid('{[]}'));

console.log(isValid2('(('));
console.log(isValid2('()'));
console.log(isValid2('()[]{}'));
console.log(isValid2('(]'));
console.log(isValid2('([)]'));
console.log(isValid2('{[]}'));