class Solution:
    def longestPalindrome(self, s: str) -> int:
        hash = {}
        longest = 0

        for ch in s:
            if ch in hash:
                hash[ch] += 1
            else:
                hash[ch] = 1

        for key, value in hash.items():
            if value >= 2:
                used = 2 * int(value // 2)
                longest += used
                hash[key] -= used

        return longest + 1 if any(True for key, value in hash.items() if value == 1) else longest


class Solution:
    def longestPalindrome(self, s: str) -> int:
        count = collections.Counter(s)
        
        res = 0
        for key, value in count.items():
            if value >= 2:
                res += (value//2) * 2
                count[key] -= (value//2) * 2
        
        for key,value in count.items():
            if value == 1:
                return res + 1

        return res