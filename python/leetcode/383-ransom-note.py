class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        letters = [0 for i in range(26+1)]

        for s in magazine:
            letters[ord(s) - ord('a')] += 1
        for m in ransomNote:
            letters[ord(m)-ord('a')] -= 1

        return all(x >= 0 for x in letters)
