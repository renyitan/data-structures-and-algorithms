class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        k = 10
        seen = set()
        res = set()
        
        for i in range(len(s) - 10 + 1):
            seq = s[i:i+k]
            if seq in seen:
                res.add(seq)
            seen.add(seq)
            
        return res
                
            