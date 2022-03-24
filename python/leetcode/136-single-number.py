class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        hash = {}
        for i in range(len(nums)):
            if nums[i] not in hash:
                hash[nums[i]] = 1
            else:
                hash[nums[i]] += 1

        for key, val in hash.items():
            if val == 1:
                return key
