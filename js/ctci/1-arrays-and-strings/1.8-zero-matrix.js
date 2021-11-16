function zeroMatrix(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  console.log(cols);

  let zeroes = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroes.push([i, j]);
      }
    }
  }
  // zeroify
  zeroes.forEach((point) => {
    const [row, col] = point;

    for (let i = 0; i < rows; i++) {
      matrix[i][col] = 0;
    }

    for (let j = 0; j < cols; j++) {
      matrix[row][j] = 0;
    }
  });

  console.log(matrix);
}

zeroMatrix([
  [1, 2, 3, 4, 5],
  [4, 0, 5, 7, 0],
  [8, 9, 7, 2, 10],
  [9, 12, 6, 3, 1],
]);
