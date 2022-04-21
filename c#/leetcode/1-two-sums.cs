public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        
        for (int i=0; i<nums.Length; i++) {
            
            if (dict.ContainsKey(target-nums[i])) {
                return new int[]{dict[target-nums[i]], i};
            }
            else if (!dict.ContainsKey(nums[i])) {
                dict.Add(nums[i], i);
            }
        }
        return new int[]{-1,-1};
    }
}