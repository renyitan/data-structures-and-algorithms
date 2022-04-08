# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        new_head = current = head
        prev = None

        while current and current.next:

            if prev is None:
                temp = current.next
                current.next = temp.next
                temp.next = current
                prev = current
                new_head = temp
            else:
                temp = current.next
                current.next = temp.next
                temp.next = current
                prev.next = temp
                prev = current

            current = current.next

        return new_head
