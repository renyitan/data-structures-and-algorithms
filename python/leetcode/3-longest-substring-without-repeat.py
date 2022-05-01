class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) <= 1:
            return len(s)

        longest = 1

        for i in range(len(s)):
            substring = s[i]
            for j in range(i+1, len(s)):
                if s[j] in substring:
                    break
                else:
                    substring += s[j]
                    longest = max(longest, len(substring))
        return longest


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()

        left = 0
        longest = 0

        for right in range(len(s)):
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            char_set.add(s[right])
            longest = max(right-left+1, longest)

        return longest
