// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = Number.NEGATIVE_INFINITY;
  let maxSum = Number.NEGATIVE_INFINITY;

  if (nums.length === 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > sum) {
      if (sum > 0 && nums[i] > 0) {
        sum += nums[i];
      } else {
        sum = nums[i];
      }
    } else {
      sum += nums[i];
    }

    maxSum = sum > maxSum ? sum : maxSum;
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-2, -1])); // -1
console.log(maxSubArray([-2, 1])); // 1
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([1, 2]));
