class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        hash = {}
        res = []

        for i in range(len(nums1)):
            if nums1[i] in hash:
                hash[nums1[i]] += 1
            else:
                hash[nums1[i]] = 1

        for j in range(len(nums2)):
            if nums2[j] in hash:
                hash[nums2[j]] -= 1
                res.append(nums2[j])
                if hash[nums2[j]] == 0:
                    del hash[nums2[j]]
        return res
