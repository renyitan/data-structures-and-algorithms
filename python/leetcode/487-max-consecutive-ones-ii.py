class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        longest = 0
        left = 0
        zeroes = 0

        for right in range(len(nums)):

            if nums[right] == 0:
                zeroes += 1

            while zeroes > 1:
                if nums[left] == 0:
                    zeroes -= 1
                left += 1

            longest = max(longest, right-left+1)

        return longest
