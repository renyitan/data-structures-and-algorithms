/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        int size = 0;
        ListNode current = head;
        
        // find the size of the linked list
        while (current != null) {
            size++;
            current = current.next;
        }
        
        // find the nth node
        int k = size - n + 1;
        
        current = head;
        ListNode prev = null;
        int i = 0;
        
        if (k == 1) {
            return head.next;
        }
        
        while (current != null) {
            i++;
            if(i == k) {
                prev.next = current.next;
                return head;
            }
            prev = current;
            current = current.next;
        }
        return new ListNode(-1);
    }
}