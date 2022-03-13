class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return len(nums)

        seen = -math.inf
        last_index = 1

        for i in range(len(nums)):
            if nums[i] > seen:
                seen = nums[i]
                if last_index < i:
                    nums[last_index], nums[i] = nums[i], nums[last_index]
                    last_index += 1
                elif last_index == i:
                    last_index += 1

        print(nums[:last_index])
        return len(nums[:last_index])
