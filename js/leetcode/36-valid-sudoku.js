// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // check the entire row for duplicate
  for (let i = 0; i < board.length; i++) {
    let rowHash = {};
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') continue;
      if (rowHash[board[i][j]] === 1) {
        return false;
      }
      rowHash[board[i][j]] = 1;
    }
  }
  // check the entire column
  for (let j = 0; j < board[0].length; j++) {
    let colHash = {};
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] === '.') continue;
      if (colHash[board[i][j]] === 1) {
        return false;
      }
      colHash[board[i][j]] = 1;
    }
  }
  // check sub-boxes;
  let rowIndex = 0;
  let currentCol = 0;

  for (let row = 0; row < board.length; row += 3) {
    for (let col = 0; col < board[0].length; col += 3) {
      let boxHash = {};
      for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
          if (board[i][j] === '.') continue;
          if (boxHash[board[i][j]] === 1) {
            return false;
          }
          boxHash[board[i][j]] = 1;
        }
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // true

// console.log(
//   isValidSudoku([
//     ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
//     ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//     ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//     ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//     ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//     ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//     ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//     ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//     ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
//   ])
// ); // false

console.log(
  isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ])
); // false
