// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let h = head;
  let current = h

  //case 1:  if there is no head or head only has 1 element
  if (current === null || current.next === null) {
    return current
  }

  // case 2: if there is > 2 elements
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    }
    else {
      current = current.next
    }
  }


  return h
};

var deleteDuplicates = function (head) {

  let hash = {}
  let current = head;
  let prev = null;
  while (current) {
    if (hash[current.val]) {
      prev.next = current.next;
    } else {
      hash[current.val] = 1;
      prev = current;
    }
    current = current.next;
  }
  return head;
}