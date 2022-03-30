# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:

        current = head
        size = 0

        while current:
            size += 1
            current = current.next

        mid = size // 2 + 1

        current, n = head, 0
        while current:
            n += 1
            if n == mid:
                return current
            else:
                current = current.next
