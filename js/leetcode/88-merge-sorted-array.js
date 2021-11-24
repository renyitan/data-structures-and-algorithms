// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let auxArr = [];
  nums1.forEach((num) => {
    if (num > 0) {
      auxArr.push(num);
    }
  });

  while (i < m && j < n) {
    if (auxArr[i] === nums2[j]) {
      nums1[i] = auxArr[i];
      i++;
      nums1[i] = nums2[j];
      j++;
      continue;
    }
    if (auxArr[i] < nums2[j]) {
      nums1[i] = auxArr[i];
      i++;
    } else {
      nums1[i] = nums2[j];
      j++;
    }
  }

  while (i < m) {
    if (auxArr[i] > 0) {
      nums1[i] = auxArr[i];
    }
    i++;
  }

  while (j < n) {
    nums1[i + j - 1] = nums2[j];
    j++;
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
