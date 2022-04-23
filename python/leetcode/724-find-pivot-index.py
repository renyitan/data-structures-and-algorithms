class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        total = sum(nums)
        left_sum = 0

        for i, num in enumerate(nums):
            if left_sum == total - left_sum - num:
                return i
            else:
                left_sum += num
                # total-=num
        return -1
