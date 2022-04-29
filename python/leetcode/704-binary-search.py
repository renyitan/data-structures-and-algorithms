import re


class Solution:
    def searchIterative(self, nums: List[int], target: int) -> int:

        left, right = 0, len(nums) - 1

        while left <= right:
            mid = (right+left) // 2

            if nums[mid] == target:
                return mid

            if nums[mid] < target:
                left = mid+1
            else:
                right = mid-1

        return -1

    def searchRecursive(self, nums, target):
        return self.binarySearch(nums, target, 0, len(nums)-1)

    def binarySearch(self, nums, target, start, end):
        if start > end:
            return -1

        mid = (start+end) // 2
        if target == nums[mid]:
            return -1
        elif target < nums[mid]:
            return self.binarySearch(nums, start, mid-1)
        elif target > nums[mid]:
            return self.binarySearch(nums, mid+1, end)
        else:
            return -1
