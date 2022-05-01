class Solution:
    def minSteps(self, s: str, t: str) -> int:

        hash = collections.Counter(s)

        for ch in t:
            if ch in hash and hash[ch] > 0:
                hash[ch] -= 1

        return sum(hash.values())
