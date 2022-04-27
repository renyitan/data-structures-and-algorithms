# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root and not subRoot:
            return False

        is_subtree = self.isSametree(root, subRoot)

        if root.left:
            is_subtree = is_subtree or self.isSametree(root.left, subRoot)
        if root.right:
            is_subtree = is_subtree or self.isSametree(root.right, subRoot)

        return is_subtree

    def isSametree(self, p, q):
        # both p and q are none
        if not p and not q:
            return True
        # one of them is none
        if not p or not q:
            return False
        # they have different vals
        if p.val != q.val:
            return False

        return self.isSametree(p.left, q.left) and self.isSametree(p.right, q.right)
