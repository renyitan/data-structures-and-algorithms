public class Solution
{
  public int MaxPower(string s)
  {
    if (s.Length == 1)
    {
      return 1;
    }

    var dict = new Dictionary<char, int>();
    int longest = 0;
    int left = 0;

    for (int right = 0; right < s.Length; right++)
    {
      if (dict.ContainsKey(s[right]))
      {
        dict[s[right]]++;
      }
      else
      {
        dict.Add(s[right], 1);
      }

      while (dict.Keys.Count() > 1)
      {
        dict[s[left]]--;
        if (dict[s[left]] == 0)
        {
          dict.Remove(s[left]);
        }
        left++;
      }
      longest = Math.Max(longest, right - left + 1);
    }
    return longest;
  }
}