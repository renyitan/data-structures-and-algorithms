// https://leetcode.com/problems/3sum/
var threeSum = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  let l = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // hold 2
    let num1 = nums[i],
      num2 = nums[i + 1];

    for (let j = 0; j < nums.length; j++) {
      if (j === i || j === i + 1) {
        continue;
      }

      if (num1 + num2 + nums[j] === 0) {
        l.push([num1, num2, nums[j]]);
      }
    }
  }
  console.log(l);
  return [];
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
