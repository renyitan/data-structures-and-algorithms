class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = set()

        def dfs(temp, idx):
            res.add(tuple(sorted(temp.copy())))
            for i in range(idx, len(nums)):
                temp.append(nums[i])
                dfs(temp, i+1)
                temp.pop()

        dfs([], 0)
        return [list(r) for r in res]
