
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
