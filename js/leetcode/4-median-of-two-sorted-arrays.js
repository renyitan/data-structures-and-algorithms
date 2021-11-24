// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const n = nums1.concat(nums2);

  n.sort((a, b) => a - b);
  console.log(n);
  if (n.length === 0) return 0;
  if (n.length === 1) return n[0];
  const isEven = n.length % 2 ? false : true;

  if (isEven) {
    const mididx = Math.floor(n.length / 2) - 1;

    return (n[mididx] + n[mididx + 1]) / 2;
  } else {
    const mididx = Math.floor(n.length / 2);

    return n[mididx];
  }
};

console.log(findMedianSortedArrays([3, -2], [-1]));
