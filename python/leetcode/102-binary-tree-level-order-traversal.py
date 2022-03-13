# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        levels = {}

        q = deque()
        q.append((root, 0))

        while len(q) > 0:
            current, level = q.popleft()
            if current:
                if level in levels:
                    levels[level].append(current.val)
                else:
                    levels[level] = [current.val]

                if current.left:
                    q.append((current.left, level+1))
                if current.right:
                    q.append((current.right, level+1))

        return list(levels.values())
