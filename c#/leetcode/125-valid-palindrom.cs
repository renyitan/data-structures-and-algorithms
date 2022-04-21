public class Solution {
    public bool IsPalindrome(string s) {
        s = s.ToLower().Trim();
        char[] arr = s.Where(c => char.IsLetterOrDigit(c)).ToArray();
        int l = 0;
        int r = arr.Length - 1;
        
        while (l <= r) {
            if (arr[l] == arr[r]) {
                l++;
                r--;
            }
            else {
                return false;
            }
        }
        return true;
    }
}