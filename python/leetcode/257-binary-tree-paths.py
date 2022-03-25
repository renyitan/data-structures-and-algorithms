# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        res = []
        path = ""
        self.backtrack(root, path, res)
        return res

    def backtrack(self, node, path, res):
        if not node:
            return
        path += str(node.val)
        if not node.left and not node.right:
            res.append(path)
            return
        else:
            path += "->"
            self.backtrack(node.left, path, res)
            self.backtrack(node.right, path, res)
