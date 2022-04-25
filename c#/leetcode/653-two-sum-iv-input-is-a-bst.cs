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
  public bool FindTarget(TreeNode root, int k)
  {
    var dict = new Dictionary<int, int>();
    if (root == null)
    {
      return false;
    }
    return Find(root, k, dict);


  }

  public bool Find(TreeNode node, int k, Dictionary<int, int> dict)
  {
    if (node == null)
    {
      return false;
    }

    if (dict.ContainsKey(k - node.val))
    {
      return true;
    }

    else if (!dict.ContainsKey(node.val))
    {
      dict.Add(node.val, 1);
    }

    return Find(node.left, k, dict) || Find(node.right, k, dict);



  }
}