class Solution:
    def reverseVowels(self, s: str) -> str:
        chars = [ch for ch in s]
        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

        left, right = 0, len(chars)-1
        while left < right:
            if chars[left] in vowels and chars[right] in vowels:
                chars[left], chars[right] = chars[right], chars[left]
                left += 1
                right -= 1

            if chars[left] not in vowels:
                left += 1
            if chars[right] not in vowels:
                right -= 1

        return "".join(chars)
