// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let counter = head;
  let count = 0;

  while (counter) {
    count++;
    counter = counter.next;
  }

  let k = count - n;
  let index = 0;
  let current = head;
  let prev = null;
  while (current) {
    if (index === k) {
      // if this is the head
      if (!prev) {
        head = current.next;
      } else {
        prev.next = current.next;
        break;
      }
    }
    prev = current;
    current = current.next;
    index++;
  }
  return head;
};