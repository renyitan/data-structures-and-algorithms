// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let current = null;
  let head = current;
  while (list1 !== null && list2 !== null) {
    let newNode;
    if (list1.val <= list2.val) {
      newNode = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      newNode = new ListNode(list2.val);
      list2 = list2.next;
    }

    if (!current) {
      current = head = newNode;
    }
    else {
      current.next = newNode;
      current = current.next;
    }
  }

  if (list1 !== null) {
    if (!current) {
      current = head = list1;
    } else {
      current.next = list1;
    }

  }
  if (list2 !== null) {
    if (!current) {
      current = head = list2;
    } else {
      current.next = list2;
    }
  }

  return head;
}