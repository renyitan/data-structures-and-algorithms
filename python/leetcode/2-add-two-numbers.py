# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        head1, head2 = l1, l2
        new_head, current = None, None
        carry = 0

        while head1 or head2:
            result = carry
            if head1:
                result += head1.val
                head1 = head1.next
            if head2:
                result += head2.val
                head2 = head2.next

            sum_val = result % 10
            carry = result // 10

            if new_head is None and current is None:
                new_head = current = ListNode(sum_val)
            else:
                current.next = ListNode(sum_val)
                current = current.next

            if carry:
                current.next = ListNode(carry)

        return new_head
