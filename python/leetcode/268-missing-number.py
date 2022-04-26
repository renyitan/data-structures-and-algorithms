class Solution:
    def missingNumberLinearSpace(self, nums: List[int]) -> int:

        res = [1] * (len(nums) + 1)

        for num in nums:
            res[num] = 0

        for i in range(len(res)):
            if res[i] > 0:
                return i

    def missingNumberConstantSpace(self, nums: List[int]) -> int:
        nums.sort()
        
        if nums[0] != 0:
            return 0
        if nums[-1] != len(nums):
            return len(nums)
        
        for i in range(1,len(nums)):
            if nums[i] - nums[i-1] != 1:
                return i