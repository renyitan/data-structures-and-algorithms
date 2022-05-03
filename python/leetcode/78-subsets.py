class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        def dfs(temp, idx):
            res.append(temp.copy())
            for i in range(idx, len(nums)):
                temp.append(nums[i])
                dfs(temp, i+1)
                temp.pop()

        dfs([], 0)
        return res
