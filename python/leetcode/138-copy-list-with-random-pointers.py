"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""


class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        current = head
        new_head = new_current = Node(-1)

        hash = {}
        # copy the list without randoms
        while current:
            new_node = Node(current.val)
            new_current.next = new_node
            hash[current] = new_node
            current = current.next
            new_current = new_current.next

        current = head
        new_current = new_head.next
        # loop through the list and add the random nodes
        while current:
            if current.random is None:
                new_current.random = None
            else:
                new_current.random = hash[current.random]

            current = current.next
            new_current = new_current.next

        return new_head.next
