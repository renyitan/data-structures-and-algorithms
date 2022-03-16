# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque


class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:

        q = deque()
        q.append((root, 0))
        levels = {}

        while len(q) > 0:
            node, level = q.popleft()
            if node:

                if level not in levels:
                    levels[level] = [node.val]
                else:
                    levels[level].append(node.val)

                if node.left:
                    q.append((node.left, level+1))
                if node.right:
                    q.append((node.right, level+1))

        results = list(levels.values())
        for i in range(len(results)):
            sum_val = sum(results[i])
            count = len(results[i])
            results[i] = sum_val / count

        return results
