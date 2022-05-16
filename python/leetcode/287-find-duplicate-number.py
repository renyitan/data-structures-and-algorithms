class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        nums.sort()

        for i in range(1, len(nums)):
            if nums[i] == nums[i-1]:
                return nums[i]

    def findDuplicate(self, nums: List[int]) -> int:
        duplicate = None
        for num in nums:
            curr = abs(num)
            if nums[curr] < 0:
                duplicate = curr
                break
            nums[curr] = nums[curr] * -1
        return duplicate
