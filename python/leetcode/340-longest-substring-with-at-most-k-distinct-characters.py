class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        dict = {}
        left = 0
        longest = 0

        for right in range(len(s)):

            dict[s[right]] = dict.get(s[right], 0) + 1

            while len(dict.keys()) > k:
                dict[s[left]] = dict.get(s[left], 0) - 1
                if dict[s[left]] == 0:
                    del dict[s[left]]
                left += 1

            longest = max((right-left+1), longest)

        return longest
