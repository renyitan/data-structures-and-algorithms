"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
from collections import deque

# bfs with extra memory space


class Solution:
    def connectBFS(self, root: 'Node') -> 'Node':
        if not root:
            return root

        q = deque()
        q.append((root, 0))
        levels = {}

        while len(q) > 0:
            node, level = q.popleft()
            if node:
                if level in levels:
                    levels[level].append(node)
                else:
                    levels[level] = [node]

            if node.left:
                q.append((node.left, level+1))
            if node.right:
                q.append((node.right, level+1))

        results = list(levels.values())
        for result in results:
            for i in range(len(result)-1):
                result[i].next = result[i+1]
        return root


# iterative without extra memory space
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""


class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root

        q = deque()
        q.append(root)

        while len(q) > 0:
            size = len(q)

            for i in range(size):
                node = q.popleft()

                if i < size - 1:
                    node.next = q[0]

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

        return root
