class Solution:
    def frequencySort(self, s: str) -> str:

        count = collections.Counter(s)
        freq = [[] for _ in range(len(s)+1)]

        for key, value in count.items():
            freq[value].append(key)

        res = []

        for i in range(len(freq)-1, 0, -1):
            for ch in freq[i]:
                for _ in range(i):
                    res.append(ch)

        return res
