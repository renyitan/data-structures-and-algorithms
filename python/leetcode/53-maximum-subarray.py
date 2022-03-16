class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = -math.inf
        current_sum = 0

        for num in nums:
            if current_sum < 0:
                current_sum = 0
            current_sum += num
            max_sum = max(current_sum, max_sum)

        return max_sum
