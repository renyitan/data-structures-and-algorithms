public class Solution {
    public int LengthOfLongestSubstringKDistinct(string s, int k) {
        var dict = new Dictionary<char, int>();
        int longest = 0;
        int left = 0;
        
        for (int right = 0; right < s.Length;right++) {
            // add char to dict
            if (dict.ContainsKey(s[right])) {
                dict[s[right]]++;
            }
            else {
                dict.Add(s[right], 1);
            }
            // make sure dict has at most k distinct characters
            while (dict.Count > k) {
                dict[s[left]]--;
                if (dict[s[left]] == 0) {
                    dict.Remove(s[left]);
                }
                left++;
            }
            
            longest = Math.Max(longest, right-left+1);
        }
        return longest;
    }
}