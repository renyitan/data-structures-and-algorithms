class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        largest = max(nums)
        i = nums.index(largest)
        for num in nums:
            if num != largest and num*2 >= largest:
                return -1

        return i
