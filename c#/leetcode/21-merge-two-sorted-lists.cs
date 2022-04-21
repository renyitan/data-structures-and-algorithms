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
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        ListNode sentinel = new ListNode(-1);
        ListNode current = sentinel;
        
        ListNode current1 = list1;
        ListNode current2 = list2;
        
        while (current1 != null && current2 != null) {
            if(current1.val <= current2.val) {
                current.next = new ListNode(current1.val);
                current1 = current1.next;
            }
            else {
                current.next = new ListNode(current2.val);
                current2 = current2.next;
            }
            current = current.next;
        }
        
        if(current1 != null) {
            current.next = current1;
        }
        if(current2 != null) {
            current.next = current2;
        }
        return sentinel.next;
    }
}