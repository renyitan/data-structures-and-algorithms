/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let f = [];
  f[0] = [1];

  for (let n = 1; n < numRows; n++) {
    let results = [];
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        results[i] = 1;
        continue;
      }

      results[i] = f[n - 1][i - 1] + f[n - 1][i];
    }
    results.push(1)
    f[n] = results;
  }
  return f;
};

console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
