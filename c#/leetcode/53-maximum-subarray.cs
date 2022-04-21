public class Solution {
    public int MaxSubArray(int[] nums) {
        
        if (nums.Length == 1) {
            return nums[0];
        }
        int largestSum = nums[0];
        int currentSum = nums[0];
        
        for (int i=1; i < nums.Length; i++) {
            if (currentSum < 0) {
                currentSum = 0;
            }
            currentSum += nums[i];
            largestSum = Math.Max(currentSum, largestSum);
        }
    return largestSum;
    }
}