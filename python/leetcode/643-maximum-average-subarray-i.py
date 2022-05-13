import math


class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        max_avg = -math.inf
        left = 0
        current_sum = 0

        for right in range(len(nums)):
            if right - left + 1 > k:
                current_sum -= nums[left]
                left += 1
            current_sum += nums[right]
            if right - left + 1 == k:
                max_avg = max(max_avg, current_sum / (right-left+1))

        return max_avg
