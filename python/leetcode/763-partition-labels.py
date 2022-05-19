
from collections import defaultdict


class Solution:
    """
    Using Merge Intervals
    Compute interval (start, end) for each letter [a-z] , where start is first occurrence of letter, and end is last occurrence of letter. 
    Then we merge any overlapping intervals, and the resulting intervals can form the answer.
    """

    def partitionLabels(self, s: str) -> List[int]:
        dict = defaultdict(list)

        for i, ch in enumerate(s):
            dict[ch].append(i)

        merged = []
        for interval in dict.values():
            if not merged or interval[0] > merged[-1][-1]:
                merged.append([interval[0], interval[-1]])
            else:
                merged[-1][-1] = max(merged[-1][-1], interval[-1])

        return [merge[-1] - merge[0] + 1 for merge in merged]


class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last_index = {}
        for i, ch in enumerate(s):
            last_index[ch] = i

        size, end = 0, 0
        res = []
        for i, ch in enumerate(s):
            if last_index[ch] > end:
                end = last_index[ch]
            size += 1
            if i == end:
                res.append(size)
                size = 0
                continue
        return res
