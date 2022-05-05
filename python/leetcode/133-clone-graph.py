"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""
from collections import deque


class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node:
            return node

        visited = {}

        q = deque([node])
        visited[node] = Node(node.val, [])

        while q:
            n = q.popleft()
            for neighbor in n.neighbors:
                if neighbor not in visited:
                    visited[neighbor] = Node(neighbor.val, [])
                    q.append(neighbor)
                visited[n].neighbors.append(visited[neighbor])
        return visited[node]
