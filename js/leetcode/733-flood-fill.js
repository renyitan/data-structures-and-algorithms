// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let COL_SIZE = image[0].length;
  let ROW_SIZE = image.length;

  let visited = {};
  let queue = [];
  let startPixelColor = image[sr][sc];

  queue.push([sr, sc]);

  while (queue.length > 0) {
    let current = queue.shift();
    let [y, x] = current;
    if (image[y][x] !== startPixelColor) continue;
    if (image[y][x] === newColor) continue;
    image[y][x] = newColor;

    let neighbours = [];

    console.log(y, x);

    // get horizontal neighbours
    if (x >= 0 && x < COL_SIZE) {
      if (x === 0) {
        if (image[y][x + 1] === startPixelColor) {
          neighbours.push([y, x + 1]);
        }
        // neighbours.push([y, x + 1]);
      } else if (x === COL_SIZE - 1) {
        neighbours.push([y, x - 1]);
      } else {
        neighbours.push([y, x + 1]);
        neighbours.push([y, x - 1]);
      }
    }

    // get vertical neighbours
    if (y >= 0 && y < ROW_SIZE) {
      if (y === 0) {
        if (image[y + 1] && image[y + 1][x] === startPixelColor) {
          neighbours.push([y + 1, x]);
        }
        // neighbours.push([y + 1, x]);
      } else if (y === ROW_SIZE - 1) {
        neighbours.push([y - 1, x]);
      } else {
        neighbours.push([y + 1, x]);
        neighbours.push([y - 1, x]);
      }
    }

    neighbours.forEach((neighbour) => {
      let [y, x] = neighbour;
      if (image[y][x] === startPixelColor) {
        queue.push([y, x]);
      }
    });
  }
  return image;
};

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  )
);

// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],

//     1,
//     1,
//     2
//   )
// );
/**
 * [[2,2,2],
 * [2,2,0],
 * [2,0,1]]
 */

// console.log(
//   floodFill(
//     [
//       [0, 0, 0],
//       [0, 0, 0],
//     ],
//     0,
//     0,
//     2
//   )
// );

// [[2,2,2],[2,2,2]]
