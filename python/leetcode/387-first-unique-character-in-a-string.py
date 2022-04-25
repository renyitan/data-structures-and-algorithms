class Solution:
    def firstUniqChar(self, s: str) -> int:
        hash = {}
        
        for i in range(len(s)):
            if s[i] in hash:
                hash[s[i]]+=1
            else:
                hash[s[i]] =1
        
        for j in range(len(s)):
            if s[j] in hash and hash[s[j]] == 1:
                return j
        
        return -1