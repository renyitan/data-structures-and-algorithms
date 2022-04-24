class Solution:
    def customSortString(self, order: str, original: str) -> str:
        hash = {}
        for i, c in enumerate(order):
            if c not in hash:
                hash[c] = i

        for s in original:
            if s not in hash:
                hash[s] = -1

        res = sorted(original, key=lambda x: hash[x])
        return "".join(res)

    def customSortStringFast(self, S, T):
        return ''.join(sorted(T, key=S.find))