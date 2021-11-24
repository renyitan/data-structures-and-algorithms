// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSumFast = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [hash[target-nums[i]], i]
    }
    hash[nums[i]] = i;
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
console.log(twoSumFast([2, 7, 11, 15], 9));
