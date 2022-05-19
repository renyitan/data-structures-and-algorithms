public class Solution
{
  public int LongestPalindrome(string s)
  {
    var dict = new Dictionary<char, int>();

    foreach (char ch in s)
    {
      if (dict.ContainsKey(ch))
      {
        dict[ch]++;
      }
      else
      {
        dict.Add(ch, 1);
      }
    }

    int length = 0;
    foreach (KeyValuePair<char, int> entry in dict)
    {
      if (entry.Value >= 2)
      {
        length += (entry.Value / 2) * 2;
        dict[entry.Key] -= (entry.Value / 2) * 2;
      }
    }
    foreach (KeyValuePair<char, int> entry in dict)
    {
      if (entry.Value == 1)
      {
        return ++length;
      }
    }
    return length;
  }
}