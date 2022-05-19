public class Solution {
    public int CharacterReplacement(string s, int k) {
        var dict = new Dictionary<char, int>();
        int left = 0;
        int longest = 0;
        
        for(int right=0; right<s.Length; right++) {
            if(dict.ContainsKey(s[right])) {
                dict[s[right]]++;
            }
            else {
                dict.Add(s[right],1);
            }
            
            while((right-left+1) - dict.Values.Max() > k) {
                dict[s[left]]--;
                if (dict[s[left]] <= 0) {
                    dict.Remove(s[left]);
                }
                left++;
            }
            
            
            
            longest = Math.Max(longest, right-left+1);
        }
        return longest;
    }
}