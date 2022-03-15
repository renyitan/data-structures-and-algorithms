class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        last_index = 0

        for i in range(len(nums)):
            if nums[i] != val:
                if last_index < i:
                    # swap the values:
                    nums[i], nums[last_index] = nums[last_index], nums[i]
                last_index += 1

        return len(nums[:last_index])
