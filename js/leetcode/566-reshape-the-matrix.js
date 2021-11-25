// https://leetcode.com/problems/reshape-the-matrix/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let originalNumRows = mat.length;
  let originalNumCols = mat[0].length;
  let matrixElements = [];
  let newMat = [];

  if (originalNumRows * originalNumCols !== r * c) {
    return mat;
  }

  for (let i = 0; i < originalNumRows; i++) {
    for (let j = 0; j < originalNumCols; j++) {
      matrixElements.push(mat[i][j]);
    }
  }

  let current = 0;

  for (let y = 0; y < r; y++) {
    let results = [];
    for (let x = 0; x < c; x++) {
      results.push(matrixElements[current++]);
    }
    newMat.push(results);
  }

  return newMat;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
); // [[1,2,3,4]]

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
); // [[1,2],[3,4]]

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    4,
    1
  )
); // [[1], [2], [3], [4]]

console.log(
  matrixReshape(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    1,
    6
  )
); // [[1, 2, 3, 4, 5, 6]]
