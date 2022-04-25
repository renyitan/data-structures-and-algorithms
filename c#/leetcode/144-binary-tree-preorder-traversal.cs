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
  public IList<int> PreorderTraversal(TreeNode root)
  {
    var res = new List<int>();

    traverse(root, res);
    return res.ToArray();
  }

  public void traverse(TreeNode root, IList<int> res)
  {
    if (root != null)
    {
      res.Add(root.val);
      traverse(root.left, res);
      traverse(root.right, res);
    }
  }
}