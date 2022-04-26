# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def twoSumBSTs(self, root1: Optional[TreeNode], root2: Optional[TreeNode], target: int) -> bool:
        hash = {}

        self.traverse(root1, hash)
        return self.check(root2, hash, target)

    def check(self, node, dict, target):
        if node:
            if target - node.val in dict:
                return True
            else:
                return self.check(node.left, dict, target) or self.check(node.right, dict, target)

    def traverse(self, node, dict):
        if (node):
            self.traverse(node.left, dict)
            dict[node.val] = 1
            self.traverse(node.right, dict)
        return dict
