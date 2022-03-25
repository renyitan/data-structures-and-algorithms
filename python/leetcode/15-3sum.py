class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        for i in range(len(nums)):
            if nums[i] > 0:
                break
            if i == 0 or nums[i-1] != nums[i]:
                self.twoSum(nums, i, res)
        return res

    def twoSum(self, nums, i, result):
        left, right = i+1, len(nums)-1

        while left < right:
            if nums[left] + nums[right] + nums[i] == 0:
                result.append([nums[left], nums[right], nums[i]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left-1]:
                    left += 1
            elif nums[left] + nums[right] + nums[i] > 0:
                right -= 1
            else:
                left += 1
