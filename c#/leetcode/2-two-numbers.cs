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
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        ListNode sentinel = new ListNode(-1);
        ListNode current = sentinel;
        
        ListNode current1 = l1;
        ListNode current2 = l2;
        int carry = 0;
        
        while (current1 != null || current2 != null) {
            int res = carry;
            if(current1 != null) {
                res += current1.val;
                current1 = current1.next;
            }
            if(current2 != null) {
                res += current2.val;
                current2 = current2.next;
            }
            
            int newVal = res % 10;
            current.next = new ListNode(newVal);
            current = current.next;
            
            carry = res / 10;
            
            
        }
        
        if (carry > 0) {
            current.next = new ListNode(carry);
        }
        return sentinel.next;
    }
}