/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution
{
  public int MaxDepth(TreeNode root, int level = 1)
  {
    if (root == null)
    {
      return level - 1;
    }
    if (root.left == null && root.right == null)
    {
      return level;
    }

    int left = MaxDepth(root.left, level + 1);
    int right = MaxDepth(root.right, level + 1);

    return Math.Max(left, right);
  }
}