import math


def searchInsert(nums, target):
    if len(nums) == 0:
        return 0

    mid = len(nums) // 2
    if nums[mid] == target:
        return mid

    if target < nums[mid]:
        return searchInsert(nums[:mid], target)
    else:
        result = searchInsert(nums[mid+1:], target)
        return result + mid + 1


print(searchInsert([1, 3, 5, 6], 4))


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        return self.search(nums, target, 0, len(nums)-1)

    def search(self, nums, target, start, end):

        if start > end:
            return start

        mid = (start+end) // 2

        if target == nums[mid]:
            return mid
        elif target < nums[mid]:
            return self.search(nums, target, 0, mid-1)
        elif target > nums[mid]:
            return self.search(nums, target, mid+1, end)
