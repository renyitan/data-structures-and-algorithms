/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public bool HasCycle(ListNode head) {
        HashSet<ListNode> hash = new HashSet<ListNode>();
        
        ListNode current = head;
        
        while (current != null) {
            if (hash.Contains(current)) {
                return true;
            }
            hash.Add(current);
            current = current.next;
        }
        return false;
    }
}