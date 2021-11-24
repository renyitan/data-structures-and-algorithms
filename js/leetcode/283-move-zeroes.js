// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let j = i + 1;
      while (j < nums.length) {
        if (nums[j] === 0) {
          j++;
          continue;
        }
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
        break;
      }
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0, 0, 1])); // [1,0,0]
