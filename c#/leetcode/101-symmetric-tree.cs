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
  public bool IsSymmetric(TreeNode root)
  {
    return IsMirror(root, root);
  }

  public bool IsMirror(TreeNode node1, TreeNode node2)
  {
    if (node1 == null && node2 == null)
    {
      return true;
    }
    if (node1 == null || node2 == null)
    {
      return false;
    }
    if (node1.val != node2.val)
    {
      return false;
    }

    return IsMirror(node1.left, node2.right) && IsMirror(node1.right, node2.left);
  }
}