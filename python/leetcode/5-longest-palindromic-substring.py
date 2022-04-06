class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ""
        longest_length = 0
        if len(s) < 1:
            return ""

        for i in range(len(s)):
            left, right = i, i
            while left >= 0 and right < len(s) and s[left] == s[right]:

                if right - left + 1 > longest_length:
                    longest = s[left:right+1]
                    longest_length = right - left + 1
                left -= 1
                right += 1

            left, right = i, i+1
            while left >= 0 and right < len(s) and s[left] == s[right]:

                if right - left + 1 > longest_length:
                    longest = s[left:right+1]
                    longest_length = right - left + 1
                left -= 1
                right += 1

        return longest
