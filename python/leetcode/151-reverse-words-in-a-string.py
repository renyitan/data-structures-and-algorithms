class Solution:
    def reverseWords(self, s: str) -> str:
        new_string = s.split()
        return " ".join(reversed(new_string))
