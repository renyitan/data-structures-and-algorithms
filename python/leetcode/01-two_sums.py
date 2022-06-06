class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}

        for i, num in enumerate(nums):
            if target - num in hash:
                return [i, hash[target-num]]
            else:
                hash[num] = i
        return -1
