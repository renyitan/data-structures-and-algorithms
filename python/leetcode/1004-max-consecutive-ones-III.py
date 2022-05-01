class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:

        longest = 0
        num_zeroes = 0
        left = 0

        for right in range(len(nums)):
            if nums[right] != 1:
                num_zeroes += 1

            while num_zeroes > k:
                if nums[left] != 1:
                    num_zeroes -= 1
                left += 1

            longest = max(longest, right-left+1)

        return longest
