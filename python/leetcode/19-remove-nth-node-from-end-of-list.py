# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:

        current = head
        size = 0

        while current:
            size += 1
            if current.next is None:
                break
            current = current.next

        target = size - n
        n2 = 0
        current, previous = head, None
        while current:
            if n2 == target:
                if current == head:
                    head = current.next
                else:
                    previous.next = current.next
                break
            else:
                previous = current
                current = current.next
                n2 += 1

        return head
