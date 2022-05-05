import collections
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        mCount = collections.Counter(magazine)
        for ch in ransomNote:
            mCount[ch] = mCount.get(ch, 0) -1
            if mCount[ch] < 0:
                return False
        return True