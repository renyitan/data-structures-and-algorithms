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
