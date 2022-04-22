public class Solution {
    public int LengthOfLongestSubstring(string s) {
        if (s.Length <= 1) {
            return s.Length;
        }
        
        int longest = 1;
        
        for (int i=0; i < s.Length; i++) {
            string substring = s[i].ToString();
            
            for (int j=i+1; j<s.Length; j++) {
                if(substring.Contains(s[j])) {
                    break;
                }
                else {
                    substring += s[j];
                    longest = Math.Max(longest, substring.Length);
                }
            }
        }
        return longest;
    }
}