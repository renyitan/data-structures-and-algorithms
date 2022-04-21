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
public class Solution {
    public IList<IList<int>> LevelOrder(TreeNode root) {
        if(root == null) {
            return new List<IList<int>>();
        }
        
        IList<IList<int>> res = new List<IList<int>>();
        Queue<TreeNode> q = new Queue<TreeNode>();
        
        q.Enqueue(root);
        
        while (q.Count > 0) {
            int count = q.Count;
            res.Add(new List<int>());
            
            for (int i = 0; i < count; i++) {
                TreeNode node = q.Dequeue();
                if(node.left != null) {
                    q.Enqueue(node.left);
                }
                if(node.right != null) {
                    q.Enqueue(node.right);
                }
                res.Last().Add(node.val);
            }
        }
        return res;
    }
}