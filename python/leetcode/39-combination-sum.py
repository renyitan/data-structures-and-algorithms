class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = set()

        def backtrack(temp, nums, t):
            if t == 0:
                res.add(tuple(sorted(temp.copy())))
                return
            elif t < 0:
                return

            for n in nums:
                temp.append(n)
                backtrack(temp, nums, t-n)
                temp.pop()

        backtrack([], candidates, target)
        return [list(r) for r in res]
