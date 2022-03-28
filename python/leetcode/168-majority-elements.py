class Solution:
    def majorityElementHashMap(self, nums: List[int]) -> int:
        maj = len(nums) // 2
        
        hash = {}
        for i in range(len(nums)):
            if nums[i] not in hash:
                hash[nums[i]] = 1
            else:
                hash[nums[i]] += 1
        
        for key, value in hash.items():
            if value > maj:
                return key

class Solution:
    def majorityElementOptimised(self, nums: List[int]) -> int:
        maj = len(nums) // 2
        nums.sort()
        
        return nums[maj]
        