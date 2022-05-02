"""
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

[1,2] => [1,2]
"""


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        last_index = 0

        for i in range(1, len(nums)):
            if nums[i] != nums[last_index]:
                last_index += 1
                nums[i], nums[last_index] = nums[last_index], nums[i]

        return len(nums[:last_index+1])
