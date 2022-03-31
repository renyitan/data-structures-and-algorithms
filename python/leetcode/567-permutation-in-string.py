class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        w = len(s1)
        s1_hash = {}

        for i in range(w):
            if s1[i] not in s1_hash:
                s1_hash[s1[i]] = 1
            else:
                s1_hash[s1[i]] += 1

        for j in range(len(s2) - w + 1):
            substring = s2[j:j+w]
            s2_hash = {}
            for ch in substring:
                if ch not in s2_hash:
                    s2_hash[ch] = 1
                else:
                    s2_hash[ch] += 1
            if s2_hash == s1_hash:
                return True

        return False
