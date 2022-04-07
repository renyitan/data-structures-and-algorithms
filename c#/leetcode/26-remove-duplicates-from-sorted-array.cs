public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length <= 1) {
            return 1;
        }
        
        int lastSeen = nums[0];
        int lastIndex = 1;
        
        for (int i=1; i<nums.Length;i++) {
            if (nums[i] > lastSeen) {
                lastSeen = nums[i];
                int temp = nums[i];
                nums[i] = nums[lastIndex];
                nums[lastIndex] = temp;
                lastIndex++;
            }
            
        }
        
        return lastIndex;
    }
}