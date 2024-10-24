class Solution:
    def isPalindrome(num: int):
        num = str(num)
        return num == num[::-1]

class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if x >= 0 and x < 10:
            return True
        s = str(x)
        start, end = 0, len(s)-1
        while start < end:
            if s[start] != s[end]:
                return False
            start += 1
            end -= 1
        return True
