class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count = 0
        values = []

        for i in range(len(nums)):
            if nums[i] == 1:
                count += 1
            if nums[i] == 0:
                values.append(count)
                count = 0

        values.append(count)
        return max(values)


class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:

        left, right = 0, 0
        longest = 0

        for right in range(len(nums)):
            if nums[right] != 1:
                right += 1
                left = right
            else:
                longest = max(longest, (right-left+1))
        return longest
