class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:

        num_set = set()
        left = 0
        max_score = 0
        current_score = 0

        for right in range(len(nums)):

            while nums[right] in num_set:
                num_set.remove(nums[left])
                current_score -= nums[left]
                left += 1

            num_set.add(nums[right])
            current_score += nums[right]
            max_score = max(current_score, max_score)

        return max_score
