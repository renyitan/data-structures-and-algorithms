# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        upper_bound, lower_bound = math.inf, -math.inf

        def validate(node, lower_bound, upper_bound):
            if not node:
                return True
            if node.val >= upper_bound:
                return False
            if node.val <= lower_bound:
                return False
            if not validate(node.left, lower_bound, node.val):
                return False
            if not validate(node.right, node.val, upper_bound):
                return False

            return True

        return validate(root, lower_bound, upper_bound)
