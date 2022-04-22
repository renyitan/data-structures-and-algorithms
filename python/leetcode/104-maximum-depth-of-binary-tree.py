# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque


class Solution:
    def maxDepthBFS(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        q = deque()
        max_level = 1
        q.append((root, max_level))

        while len(q) > 0:
            node, level = q.popleft()
            if node:
                max_level = max(max_level, level)
                if node.left:
                    q.append((node.left, level+1))
                if node.right:
                    q.append((node.right, level+1))
        return max_level

    def maxDepthDFS(self, root: Optional[TreeNode], level=1) -> int:
        if not root:
            return level - 1

        if not root.left and not root.right:
            return level

        left = self.maxDepthDFS(root.left, level+1)
        right = self.maxDepthDFS(root.right, level+1)

        return max(left, right)
