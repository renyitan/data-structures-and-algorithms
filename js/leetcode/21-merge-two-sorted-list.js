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
  let head1 = list1, head2 = list2;
  let head = current = new ListNode(-1);

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      current.next = new ListNode(head1.val);
      head1 = head1.next;
    }
    else {
      current.next = new ListNode(head2.val);
      head2 = head2.next;
    }
    current = current.next;
  }

  if (head1) {
    current.next = head1;
  }
  if (head2) {
    current.next = head2;
  }

  return head.next;


};