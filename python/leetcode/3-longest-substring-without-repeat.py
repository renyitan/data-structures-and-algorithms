class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) <= 1:
            return len(s)

        longest = 1
        
        for i in range(len(s)):
            substring = s[i]
            for j in range(i+1, len(s)):

                if s[j] not in substring:
                    substring += s[j]

                    longest = max(longest, len(substring))
                else:
                    break
        
        return longest