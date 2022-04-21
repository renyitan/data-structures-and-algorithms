class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        hash = {}
        for i in range(len(nums1)):
            if nums1[i] not in hash:
                hash[nums1[i]] = 1
        
        s = set()
        for j in range(len(nums2)):
            if nums2[j] in hash:
                s.add(nums2[j])
        
        return list(s)
            
        
    def intersectionFast(self, nums1: List[int], nums2: List[int]) -> List[int]:
        s1, s2 = set(nums1), set(nums2)
        return list(s1.intersection(s2))
        