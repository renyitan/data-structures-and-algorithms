public class Solution
{
  public int MaxPower(string s)
  {
    int longest = 0;
    int left = 0, right = 1;
    char last = s[0];

    if (s.Length == 1)
    {
      return 1;
    }

    while (right < s.Length)
    {
      if (s[right] != last)
      {
        last = s[right];
        left = right;
      }
      Console.WriteLine(right);
      Console.WriteLine(left);
      Console.WriteLine('\n');
      longest = Math.Max(longest, right - left + 1);
      right++;
    }

    return longest;
  }
}