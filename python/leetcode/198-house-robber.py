class Solution:
    def robRecursive(self, nums: List[int]) -> int:
        total = [0] * (len(nums) + 1)
        total[1] = nums[0]

        for i in range(2, len(nums)+1):
            total[i] = max(nums[i-1] + total[i-2], total[i-1])

        return total[len(nums)]
