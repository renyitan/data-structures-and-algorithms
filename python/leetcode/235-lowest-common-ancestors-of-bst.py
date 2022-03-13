# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestorRecursive(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        parent_val = root.val
        p_val = p.val
        q_val = q.val

        if p_val > parent_val and q_val > parent_val:
            return self.lowestCommonAncestorRecursive(root.right, p, q)
        if p.val < root.val and q.val < root.val:
            return self.lowestCommonAncestorRecursive(root.left, p, q)

        else:
            return root

    def lowestCommonAncestorIterative(self, root, p, q):

        p_val, q_val = p.val, q.val
        node = root

        while node:
            parent = node
            if p_val > parent.val and q_val > parent.val:
                node = node.right
            elif p_val < parent.val and q_val < parent.val:
                node = node.left
            else:
                return node
