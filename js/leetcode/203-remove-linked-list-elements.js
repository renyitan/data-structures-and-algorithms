
// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let prev = null;
  let newHead = head;
  let current = head;

  while (current) {
    if (current.val === val) {
      if (!prev) {
        newHead = current.next;
        current = newHead;
      } else {
        // remove the elements
        prev.next = current.next;
        current = current.next;
      }
    }
    else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};