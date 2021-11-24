// https://leetcode.com/problems/rotate-array/

var rotate = function (nums, k) {
  let rotateFactor = k % nums.length;
  let lastElems = nums.slice(nums.length - rotateFactor, nums.length);

  for (let i = nums.length - 1; i >= rotateFactor; i--) {
    nums[i] = nums[i - rotateFactor];
  }
  for (let j = 0; j < lastElems.length; j++) {
    nums[j] = lastElems[j];
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 7)); //[5,6,7,1,2,3,4]
