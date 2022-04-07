# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        hash = {}
        current = head
        
        while current:
            if current.val in hash:
                hash[current.val] += 1
            else:
                hash[current.val] = 1
            
            current = current.next
        
        current, prev = head, None
        while current:
            if hash[current.val] >= 2:
                if prev is None:
                    head = current.next
                else:
                    prev.next = current.next
                current = current.next
            else:
                prev = current
                current = current.next
        
        return head
                
        
        