// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let searchRowIndex = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    if (matrix[i][0] === target) return true;
    if (target > matrix[i][0] && target < matrix[i + 1][0]) {
      searchRowIndex = i;
      break;
    }
    if (target >= matrix[i + 1][0]) {
      searchRowIndex = i + 1;
    }
  }
  // search the row
  for (let j = 0; j < matrix[searchRowIndex].length; j++) {
    if (matrix[searchRowIndex][j] === target) {
      return true;
    }
  }
  return false;
};

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// ); //true

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     13
//   )
// ); //true

console.log(searchMatrix([[1], [3]], 3));
