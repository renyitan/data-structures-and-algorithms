function rotateMatrix(matrix) {
  let size = matrix.length;
  for (let row = 0; row < size/2; row++) {
    for (let column = row; column < size - column; column++) {
      let temp = matrix[column][row]

      matrix[column][row] = matrix[size - row - 1][column];
      matrix[size - row - 1][column] = matrix[size - column - 1][size - row - 1]
      matrix[size - column - 1][size - row - 1] = matrix[row][size - column - 1]
      matrix[row][size - column - 1] = temp;
      

    }
  }
  console.log(matrix)
}

rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
