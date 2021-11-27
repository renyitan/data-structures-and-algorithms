// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    if (target - numbers[i] in hash) {
      return [hash[target - numbers[i]] + 1, i + 1];
    }
    hash[numbers[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([2, 3, 4], 6)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,2]
