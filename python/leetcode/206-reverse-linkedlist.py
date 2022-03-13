# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        previous, after = None, None

        if current is None or current.next is None:
            return head

        while current.next is not None:
            temp = current.next
            current.next = previous
            previous = current
            current = temp

        # you'll end up at last node
        head = current
        head.next = previous

        return head
