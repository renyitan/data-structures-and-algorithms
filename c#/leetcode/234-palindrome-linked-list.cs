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
public class Solution
{
  public bool IsPalindrome(ListNode head)
  {
    var res = new List<int>();

    ListNode current = head;

    while (current != null)
    {
      res.Add(current.val);
      current = current.next;
    }

    return CheckPalindrome(res);
  }

  public bool CheckPalindrome(List<int> arr)
  {
    int left = 0, right = arr.Count - 1;

    while (left <= right)
    {
      if (arr[left] != arr[right])
      {
        return false;
      }
      else
      {
        left++;
        right--;
      }
    }
    return true;
  }
}