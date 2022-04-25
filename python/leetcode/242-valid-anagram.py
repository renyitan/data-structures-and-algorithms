class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        len_s, len_t = len(s), len(t)

        if (len_s) != (len_t):
            return False

        return sorted(s) == sorted(t)
