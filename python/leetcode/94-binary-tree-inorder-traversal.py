# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []

        def _traverse(root, res):
            if root:
                _traverse(root.left, res)
                res.append(root.val)
                _traverse(root.right, res)
            return res

        _traverse(root, result)
        return result
