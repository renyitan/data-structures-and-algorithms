class Solution:
    def robRecursive(self, nums: List[int]) -> int:
        total = [0] * (len(nums) + 1)
        total[1] = nums[0]

        for i in range(2, len(nums)+1):
            total[i] = max(nums[i-1] + total[i-2], total[i-1])

        return total[len(nums)]


class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return max(nums)

        rob = [0 for _ in range(len(nums))]

        rob[0] = nums[0]
        rob[1] = max(nums[0], nums[1])

        for i in range(2, len(nums)):
            rob[i] = max(nums[i]+rob[i-2], rob[i-1])

        return rob[len(nums)-1]
