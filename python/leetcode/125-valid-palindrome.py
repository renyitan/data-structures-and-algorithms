class Solution:
    def isPalindrome(self, s: str) -> bool:
        sentence = ''.join(ch for ch in s if ch.isalnum()).lower()
        return sentence == sentence[::-1]


class Solution:
    def isPalindrome(self, s: str) -> bool:
        chars = [ch for ch in s.lower() if ch.isalnum()]

        left, right = 0, len(chars)-1

        while left < right:
            if chars[left] != chars[right]:
                return False
            left += 1
            right -= 1

        return True
