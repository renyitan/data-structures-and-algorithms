class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        hash = collections.Counter(chars)
        res = 0

        for word in words:
            curr_hash = hash.copy()
            if self.checkWord(word, curr_hash):
                res += len(word)
        return res

    def checkWord(self, word, dict):
        for ch in word:
            if ch in dict:
                dict[ch] -= 1
                if dict[ch] < 0:
                    return False
            else:
                return False
        return True
