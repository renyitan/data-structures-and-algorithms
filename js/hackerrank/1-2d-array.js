// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglassSum(arr) {
  // Write your code here
  let ROW_SIZE = arr.length;
  let COL_SIZE = arr[0].length;
  let maxSum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i <= ROW_SIZE - 3; i++) {
    for (let j = 0; j <= COL_SIZE - 3; j++) {
      let sum = 0;
      // top of hourglass
      sum += arr[i][j]
      sum += arr[i][j + 1]
      sum += arr[i][j + 2]
      // mid of hourglass
      sum += arr[i + 1][j + 1];
      // bottom of hourglass
      sum += arr[i + 2][j]
      sum += arr[i + 2][j + 1]
      sum += arr[i + 2][j + 2]
      // compare with sum
      maxSum = Math.max(maxSum, sum)
    }
  }
  return maxSum;
}

console.log(hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]))