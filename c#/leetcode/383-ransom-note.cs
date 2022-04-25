public class Solution {
    public bool CanConstruct(string ransomNote, string magazine) {
        int[] letters = new int[26];
        
        foreach(char m in magazine) {
            letters[m-'a']++;
        }
                
        foreach(char r in ransomNote) {
            letters[r-'a']--;
        }
        
        return !letters.Any(x => x< 0);
    }
}