class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        dict = {}
        left = 0
        longest = 0

        for right in range(len(answerKey)):
            dict[answerKey[right]] = dict.get(answerKey[right], 0) + 1

            while (right-left+1) - max(dict.values()) > k:
                dict[answerKey[left]] = dict.get(answerKey[left], 0) - 1
                left += 1

            longest = max(longest, right-left+1)
        return longest
