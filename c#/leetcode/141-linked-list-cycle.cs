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
public class Solution
{
  public bool HasCycle(ListNode head)
  {
    HashSet<ListNode> hash = new HashSet<ListNode>();

    ListNode current = head;

    while (current != null)
    {
      if (hash.Contains(current))
      {
        return true;
      }
      hash.Add(current);
      current = current.next;
    }
    return false;
  }

  public bool HasCycleDict(ListNode head)
  {
    var dict = new Dictionary<ListNode, int>();

    ListNode current = head;

    while (current != null)
    {
      if (dict.ContainsKey(current))
      {
        return true;
      }
      else
      {
        dict.Add(current, 1);
      }
      current = current.next;
    }
    return false;
  }

  public bool HasCycleTwoPointers(ListNode head)
  {
    if (head == null || head.next == null)
    {
      return false;
    }

    ListNode slow = head;
    ListNode fast = head.next;

    while (slow != null && fast != null)
    {
      if (fast.next == null || fast.next.next == null)
      {
        return false;
      }

      if (fast == slow)
      {
        return true;
      }

      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }
}