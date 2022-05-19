class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = set()

        def backtrack(temp, elements):
            if not elements:
                res.add(tuple(temp.copy()))

            for e in elements:
                temp.append(e)
                new_nums = elements.copy()
                new_nums.remove(e)
                backtrack(temp, new_nums)
                temp.pop()

        backtrack([], nums)
        return [list(r) for r in res]
