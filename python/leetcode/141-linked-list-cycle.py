# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycleHashMap(self, head: Optional[ListNode]) -> bool:

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

class Solution:
    def hasCycleTwoPointers(self, head: Optional[ListNode]) -> bool:
        if not head or not head.next:
            return False
        slow, fast = head, head.next
        
        while slow and fast:
            if not fast:
                return False
            elif not fast.next or not fast.next.next:
                return False
            
            if fast == slow:
                return True
            
            slow = slow.next
            fast = fast.next.next