class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:

        hash = {}

        reconstruct = ""

        for i in range(len(magazine)):
            if magazine[i] in hash:
                hash[magazine[i]] += 1
            else:
                hash[magazine[i]] = 1

        for j in range(len(ransomNote)):
            if ransomNote[j] in hash:
                hash[ransomNote[j]] -= 1
                reconstruct += ransomNote[j]
                if hash[ransomNote[j]] == 0:
                    del hash[ransomNote[j]]

        return len(reconstruct) == len(ransomNote)
