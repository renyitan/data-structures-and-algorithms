// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let newNode = new ListNode();
  while (!l1.next || !l2.next) {
    newNode.val = l1.val + l2.val;
    newNode.next = new ListNode()
     
     
  }

addTwoNumbers([2, 4, 3], [5, 6, 4]);
