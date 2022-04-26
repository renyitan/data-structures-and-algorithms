public class Solution {
    public int RomanToInt(string s) {
        var romans = new Dictionary<char, int>() {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        
        
        int i = 0;
        int total = 0;
        
        while (i < s.Length) {
            if ((i + 1) < s.Length && romans[s[i]] < romans[s[i+1]]) {
                total += (romans[s[i+1]] - romans[s[i]]);
                i += 2;
            }
            else {
                total += romans[s[i]];
                i += 1;
            }
        }
        
        return total;
    }
    
}