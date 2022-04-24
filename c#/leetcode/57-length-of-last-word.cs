public class Solution
{
  public int LengthOfLastWord(string s)
  {
    string[] strs = s.Split(" ", StringSplitOptions.RemoveEmptyEntries);
    return strs[strs.Length - 1].Length;

  }
}