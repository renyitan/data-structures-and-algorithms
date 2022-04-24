# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        def recurse_tree(current_node):
            if not current_node:
                return False

            # left recursion
            left = recurse_tree(current_node.left)

            # right recursion
            right = recurse_tree(current_node.right)

            # if current_node is p or q
            mid = current_node == p or current_node == q

            if mid+left+right >= 2:
                self.ans = current_node

            return mid or left or right

        recurse_tree(root)
        return self.ans
