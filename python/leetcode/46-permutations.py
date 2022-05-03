class Solution:
    def __init__(self):
        self.res = []

    def permute(self, nums: List[int]) -> List[List[int]]:
        self.backtrack(nums, [])
        return self.res

    def backtrack(self, nums, path):
        if len(nums) == 0:
            self.res.append(path)
            return

        for i in range(len(nums)):
            self.backtrack(nums[:i]+nums[i+1:], path+[nums[i]])


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []

        def dfs(temp, elements):
            if len(elements) == 0:
                res.append(temp.copy())

            for i in range(len(elements)):
                temp.append(elements[i])
                new_elements = elements.copy()
                new_elements.remove(elements[i])
                dfs(temp, new_elements)
                temp.pop()

        dfs([], nums)
        return res
