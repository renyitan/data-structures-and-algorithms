public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] res = new int[nums.Length];
        Array.Fill(res, 1);
        
        int prefix = 1;
        for (int i = 0; i < res.Length; i++) {
            res[i] *= prefix;
            prefix *= nums[i];
        }
        
        int postfix = 1;
        for (int i = res.Length-1; i > -1; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }
        return res;
    }
}