# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        nums = []

        def traverse(node):
            if node:
                traverse(node.left)
                nums.append(node.val)
                traverse(node.right)

        traverse(root)
        return nums[k-1]
