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
    public ListNode ReverseList(ListNode head) {
        ListNode current = head;
        ListNode prev = null;
        
        
        while (current != null) {
            ListNode next = current.next;
            if (next == null) {
                head = current;
            }
            current.next = prev;
            prev = current;
            current = next;
        }
        
        return head;
    }
}