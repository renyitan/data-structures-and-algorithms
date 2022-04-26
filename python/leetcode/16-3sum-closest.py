class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:

        if len(nums) < 3:
            return -1
        if len(nums) == 3:
            return sum(nums)
        nums.sort()
        res, diff = math.inf, math.inf

        for i in range(len(nums)):
            left, right = i+1, len(nums)-1

            while left < right and res != target:
                if nums[i] + nums[left]+nums[right] == target:
                    res = nums[i]+nums[left]+nums[right]
                    break
                else:
                    total = nums[i]+nums[left]+nums[right]

                    if abs(target-total) < diff:
                        diff = abs(target-total)
                        res = total

                    if total > target:
                        right -= 1
                    else:
                        left += 1

        return res
