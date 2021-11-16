// https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch = function (nums, left, right, target) {
  if (left > right) {
    return left;
  }
  // console.log(left, right`)

  const mid = Math.floor((left + right) / 2);
  if (nums[mid] == target) return mid;

  if (target < nums[mid]) {
    return binarySearch(nums, left, mid - 1, target);
  }
  if (target > nums[mid]) {
    return binarySearch(nums, mid + 1, right, target);
  }
};

var searchInsert = function (nums, target) {
  return binarySearch(nums, 0, nums.length-1, target);
};

console.log(searchInsert([1], 0));
