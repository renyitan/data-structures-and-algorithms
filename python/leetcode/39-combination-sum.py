class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        s = set()

        def backtrack(temp):
            if sum(temp) > target:
                return

            if sum(temp) == target and tuple(sorted(temp)) not in s:
                s.add(tuple(sorted(temp)))
                res.append(temp.copy())

            for candidate in candidates:
                temp.append(candidate)
                backtrack(temp)
                temp.pop()

        backtrack([])
        return res
