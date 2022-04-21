
public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        
        foreach(int num in nums) {
            if (dict.ContainsKey(num)) {
                return true;
            }
            else {
                dict.Add(num ,1);
            }
        }
        return false;
    }
}