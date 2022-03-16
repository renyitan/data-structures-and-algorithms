# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:

        if not root:
            return False

        if root.val == targetSum:
            # make sure it's a leaf node
            if root.left is None and root.right is None:
                return True

        remainder = targetSum - root.val

        return self.hasPathSum(root.left, remainder) or self.hasPathSum(root.right, remainder)
