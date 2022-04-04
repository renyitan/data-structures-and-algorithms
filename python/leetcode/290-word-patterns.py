class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split(' ')
        if len(pattern) != len(words):
            return False
        
        charToWords, wordsToChar = {}, {}
        
        for c,w in zip(pattern, words):
            if c in charToWords and charToWords[c] != w:
                return False
            if w in wordsToChar and wordsToChar[w] != c:
                return False
            
            charToWords[c] = w
            wordsToChar[w] = c
        
        return True
        