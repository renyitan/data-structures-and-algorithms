class Solution:
    def isPalindrome(self, s: str) -> bool:
        sentence = ''.join(ch for ch in s if ch.isalnum()).lower()
        return sentence == sentence[::-1]
