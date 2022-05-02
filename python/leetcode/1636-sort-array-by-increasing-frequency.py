
import collections


class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:

        count = collections.Counter(nums)
        freq = [[] for _ in range(len(nums)+1)]

        for key, value in count.items():
            freq[value].append(key)
            freq[value].sort(reverse=True)

        res = []
        for i in range(len(freq)):
            for n in freq[i]:
                for m in range(i):
                    res.append(n)
        return res
