// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] + 1 || 1;
    if (hash[nums[i]] > 1) return true;
  }
  return false;
};

let containsDuplicateOptimised = function (nums) {
  return nums.length !== new Set(nums).size;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicateOptimised([1, 2, 3, 4]));
