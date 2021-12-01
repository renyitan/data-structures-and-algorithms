/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let output = []
  if (root) {
    _traverse(root, output);
  }
  return output
};

var _traverse = function (root, arr) {
  if (root) {
    arr.push(root.val)
    _traverse(root.left, arr);
    _traverse(root.right, arr);
  }
}

console.log(preorderTraversal([1, null, 2, 3])) // [1,2,3]