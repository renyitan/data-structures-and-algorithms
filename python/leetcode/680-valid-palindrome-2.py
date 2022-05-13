class Solution:
    def isPalindrome(self, s, start, end):
        while start < end:
            if s[start] != s[end]:
                return False
            start+=1
            end -=1
        return True
    
    def validPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) -1
        while left < right:
            if s[left] != s[right]:
                # try both deletions
                return self.isPalindrome(s, left, right-1) or self.isPalindrome(s, left+1, right)
            left+=1
            right-=1
        return True
            
    
        
        