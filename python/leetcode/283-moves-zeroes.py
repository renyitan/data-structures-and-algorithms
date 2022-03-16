from collections import deque


class Solution:
    def moveZeroesOptimal(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        last_zero = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[last_zero] = nums[i]
                last_zero += 1

        for i in range(last_zero, len(nums)):
            nums[i] = 0

        return nums

    def moveZeroPointers(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) == 1:
            return nums
        
        last_index = 0
        
        for i in range(len(nums)):
            if nums[i] != 0:
                if i > last_index and nums[last_index] == 0:
                    nums[last_index], nums[i] = nums[i], nums[last_index]
                    last_index += 1
                else: 
                    last_index += 1
        
        return nums[:last_index]