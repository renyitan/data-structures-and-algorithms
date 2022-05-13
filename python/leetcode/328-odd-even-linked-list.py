# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current, prev = head, None
        even_head = None
        is_odd = True

        if not current:
            return None

        while current:
            if not is_odd:
                if not current.next:
                    break
                temp = current.next
                current.next = temp.next
                if not even_head:
                    even_head = current
                prev.next = temp
                current = temp
                is_odd = True

            elif is_odd:
                prev = current
                current = current.next
                is_odd = False

        if even_head:
            prev.next = even_head

        return head
