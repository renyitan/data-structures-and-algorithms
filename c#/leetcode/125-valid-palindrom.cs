public class Solution
{
  public bool IsPalindrome(string s)
  {
    char[] chars = s.ToLower().Where(x => char.IsLetterOrDigit(x)).ToArray();
    int left = 0, right = chars.Length - 1;

    while (left < right)
    {
      if (chars[left] != chars[right])
      {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
}