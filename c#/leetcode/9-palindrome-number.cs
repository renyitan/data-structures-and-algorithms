public class Solution {
    public bool IsPalindrome(int x) {
        
        string str = Convert.ToString(x);
        
        int left, right;
        left = 0;
        right = str.Length - 1;
        
        while (left < str.Length && right >=0) {
            if (str[left] != str[right]) {
                return false;
            }
            left += 1;
            right -= 1;
        }
        
        return true;
    }
}