class Solution:
    def maxPower(self, s: str) -> int:
        left = 0
        unique = {}
        longest = 0

        for right in range(len(s)):
            unique[s[right]] = unique.get(s[right], 0) + 1
            while len(unique.keys()) > 1:
                unique[s[left]] = unique.get(s[left], 0) - 1
                if unique[s[left]] <= 0:
                    del unique[s[left]]
                left += 1

            longest = max(longest, right-left+1)

        return longest
