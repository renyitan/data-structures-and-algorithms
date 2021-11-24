// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function (nums1, nums2) {
  let hash = {};
  let results = [];
  for (let i = 0; i < nums1.length; i++) {
    hash[nums1[i]] = hash[nums1[i]] + 1 || 1;
  }
  for (let j = 0; j < nums2.length; j++) {
    if (hash[nums2[j]] > 0) {
      hash[nums2[j]] = hash[nums2[j]] - 1;
      results.push(nums2[j]);
    }
  }
  console.log(hash);
  console.log(results)
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(
  intersect(
    [
      61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12,
      86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30,
      67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4,
      63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81,
      88, 60, 10, 55, 66, 82, 0, 79, 11, 81,
    ],
    [
      5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92,
      84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
    ]
  )
);
