// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (mid === start) {
      return -1;
    }
    if (target < nums[mid]) {
      end = mid;
      continue;
    }

    if (target > nums[mid]) {
      start = mid;
      continue;
    }
  }
};

console.log(search([-1, 0, 3, 5, 9, 12], 10)); // 4 -- index
console.log(search([5], 5)); // 4 -- index
