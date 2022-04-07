public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int lastIndex = 0;
        
        for (int i=0; i < nums.Length; i++) {
         
           
            if(nums[i] != val) {
                if (i > lastIndex) {
                    int temp = nums[i];
                    nums[i] = nums[lastIndex];
                    nums[lastIndex] = temp;
                }
                lastIndex++;
            }
        }
        
        return lastIndex;
    }
}