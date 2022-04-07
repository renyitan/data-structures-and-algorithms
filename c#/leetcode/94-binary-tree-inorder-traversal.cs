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
    public IList<int> InorderTraversal(TreeNode root) {
        List<int> result = new List<int>();
        
        void traverse(TreeNode node) {
            if (node != null) {
                traverse(node.left);
                result.Add(node.val);
                traverse(node.right);
            }
        }
        
        traverse(root);
        return result;
    }
    
}