# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import heapq
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        h = [(l.val, idx) for idx, l in enumerate(lists) if l]

        heapq.heapify(h)
        head = current = ListNode(None)

        while h:
            val, idx = heapq.heappop(h)
            current.next = ListNode(val)
            current = current.next
            node = lists[idx] = lists[idx].next
            if node:
                heapq.heappush(h, (node.val, idx))

        return head.next
