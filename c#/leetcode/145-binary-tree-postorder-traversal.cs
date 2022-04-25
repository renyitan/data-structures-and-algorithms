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
  public IList<int> PostorderTraversal(TreeNode root)
  {
    var res = new List<int>();

    traverse(root, res);

    return res.ToArray();
  }

  public void traverse(TreeNode node, List<int> res)
  {
    if (node != null)
    {
      traverse(node.left, res);
      traverse(node.right, res);
      res.Add(node.val);
    }
  }
}