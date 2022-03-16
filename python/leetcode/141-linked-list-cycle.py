# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:

        hash = {}
        slow = head

        while slow:
            if not slow.next or not slow.next.next:
                return False

            if slow in hash:
                return True
            else:
                hash[slow] = 1
            slow = slow.next
